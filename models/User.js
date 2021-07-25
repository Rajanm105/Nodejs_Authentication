const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: Number},
    password: {type: String},
});

module.exports = User = mongoose.model('User',UserSchema);