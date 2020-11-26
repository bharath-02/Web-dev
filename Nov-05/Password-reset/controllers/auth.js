const User = require('../models/user');
const jwt = require('jsonwebtoken');
const lodash = require('lodash');
const mailgun = require("mailgun-js");
const DOMAIN = 'sandboxc6bc29d43e3d4da6a3af52250f1c156b.mailgun.org';
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });

//  Create user without email account activation

exports.signup = (req, res) => {
    console.log(req.body);
    const { name, email, password } = req.body;
    User.findOne({ email }).exec((err, user) => {
        if (user) {
            return res.status(400).json({ error: "User with this email already exists." });
        }

        const token = jwt.sign({ name, email, password }, process.env.JWT_ACC_ACTIVATE, { expiresIn: '20m' });

        const data = {
            from: 'noreply@hello.com',
            to: email,
            subject: 'Account Activation Link',
            html: `
                <h2>Please click on the given link to activate your account</h2>
                <a href="#">${process.env.CLIENT_URL}/authentication/activate/${token}</a>
            `
        };
        mg.messages().send(data, function(error, body) {
            if (error) {
                return res.json({
                    error: error.message
                })
            }
            return res.json({
                message: 'Email has been sent, kindly activate your account'
            })
        });
    });
}

exports.activateAccount = (req, res) => {
    const { token } = req.body;
    if (token) {
        jwt.verify(token, process.env.JWT_ACC_ACTIVATE, (err, decodedToken) => {
            if (err) {
                return res.status(400).json({ error: 'Incorrect or Expired link.' })
            }
            const { name, email, password } = decodedToken;
            User.findOne({ email }).exec((err, user) => {
                if (user) {
                    return res.status(400).json({ error: "User with this email already exists." });
                }
                let newUser = new User({ name, email, password });
                newUser.save((err, success) => {
                    if (err) {
                        console.log('Error in signup while account activation: ', err);
                        return res.status(400), json({ error: 'Error activating account' })
                    }
                    res.json({
                        message: "Signup success!!"
                    })
                })
            });
        })
    } else {
        return res.json({ error: 'Something went wrong!!!' })
    }
}

exports.forgotPassword = (req, res) => {
    const { email } = req.body;

    User.findOne({ email }, (err, user) => {
        if (err || !user) {
            return res.status(400).json({ error: "User with this email does not exist." });
        }

        const token = jwt.sign({ _id: user._id }, process.env.RESET_PASSWORD_KEY, { expiresIn: '20m' });

        const data = {
            from: 'noreply@hello.com',
            to: email,
            subject: 'Password Reset Link',
            html: `
                <h2>Please click on the given link to reset your password</h2>
                <a href="#">${process.env.CLIENT_URL}/resetpassword/${token}</a>
            `
        };
        return user.updateOne({ resetLink: token }, (err, success) => {
            if (err) {
                return res.status(400).json({ error: 'reset password link error' });
            } else {
                mg.messages().send(data, (error, body) => {
                    if (error) {
                        return res.json({
                            error: error.message
                        })
                    }
                    return res.json({
                        message: 'Email has been sent, kindly follow the instructions.'
                    })
                });
            }
        })
    })
}

exports.resetPassword = (req, res) => {
    const { resetLink, newPassword } = req.body;
    if (resetLink) {
        jwt.verify(resetLink, process.env.RESET_PASSWORD_KEY, (error, decodedData) => {
            if (error) {
                return res.status(401).json({
                    error: "Incorrect token or it is expired."
                })
            }
            User.findOne({ resetLink }, (err, user) => {
                if (err || !user) {
                    return res.status(400).json({ error: "User with this token does not exist." })
                }
                const obj = {
                    password: newPassword
                }
                user = lodash.extend(user, obj);
                user.save((err, result) => {
                    if (err) {
                        return res.status(400).json({ error: 'reset password error' });
                    } else {
                        return res.status(200).json({ message: 'Your Password has been changed.' });
                    }
                })
            })
        })
    } else {
        return res.status(401).json({ error: "Authentication Error!!!" });
    }
}