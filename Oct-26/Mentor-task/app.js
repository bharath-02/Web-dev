const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const mentors = require('./mentor');
const students = require('./student');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'Assets')));

// API endpoints
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'Assets', 'index.html'));
})

app.post('/', (req, res) => {
    req.body.id = mentors.length + 1;
    mentors.push(req.body);
    res.sendFile(path.join(__dirname, 'Assets', 'index.html'));
    res.json('Mentor added');
})

app.get('/mentors', (req, res) => {
    res.json(students);
})

app.get('/students', (req, res) => {
    res.json(students);
})

app.get('/students/:id', (req, res) => {
    let studentdata = students.filter((student) => student.mentor === req.params.id);
    (studentdata.length !== 0) ? res.join(studentdata): res.status(400).json({ message: `Mentor with name ${req.params.id} not found` });
})

app.get('/student.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'files', 'student.html'));
})

app.post('/students', (req, res) => {
    req.body.id = students.length + 1;
    students.push(req.body);
    res.json(students);
})

app.listen(3300, () => {
    console.log('Listening on PORT: ', 3300);
})