const mongoose = require("mongoose");
const Schema = mongoose.Schema;
let Polls = new Schema({
    poll_name: {type: String},
    poll_options: {type: Array}
});

module.exports = mongoose.model('Polls', Polls);