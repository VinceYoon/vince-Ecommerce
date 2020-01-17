const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://vince:goat6336@react-ec-djmrw.mongodb.net/test?retryWrites=true&w=majority',
        {useNewUrlParser: true}).then(() => console.log('DB connected'))
                                .catch(err => console.error(err));

app.get('/', (req, res) => {
    res.send('heelo wolrd');
});

app.listen(5050);
