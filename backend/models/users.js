const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Users = new Schema({
    user_name: {type: String},
    user_password: {type: String},
    user_role: {type: String}
});

module.exports = mongoose.model('Users', Users);