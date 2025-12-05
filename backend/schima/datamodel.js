const mongoose = require('mongoose');

const datapattern = mongoose.Schema({
    fullname: {
        type: String
    },
    email: {
        type: String
    },
    dob: {
        type: String
    },
    pass: {
        type: String
    },
    gender: {
        type: String
    }
});

const myschema = mongoose.model("usermrn6week", datapattern);
module.exports = myschema;
