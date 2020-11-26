const mongoose = require('mongoose');

// Connect to DB
mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }).then(() => console.log('DB connection established'.cyan.bold))
    .catch(err => console.log('DB connection error: ', err));