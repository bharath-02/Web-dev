const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const shortUrl = require('./models/shortUrl');
const app = express();

mongoose.connect('mongodb://localhost:27017/urlShortener', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err) => {
    if (err) {
        console.log('Error Occured'.red.bold);
    } else {
        console.log('Server connected to mongoDB'.cyan.bold);
    }
})

app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.get('/', async(req, res) => {
    const shortUrls = await shortUrl.find();
    res.render('index', { shortUrls: shortUrls });
})

app.post('/shortUrls', async(req, res) => {
    await shortUrl.create({ fullUrl: req.body.fullUrl });
    res.redirect('/');
})

app.get('/:shortUrl', async(req, res) => {
    const shorturl = await shortUrl.findOne({ shortUrl: req.params.shortUrl })
    if (shorturl == null) {
        return res.sendStatus(404);
    }

    shorturl.clicks++;
    shorturl.save();

    res.redirect(shorturl.fullUrl);
})

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`.yellow.bold);
});