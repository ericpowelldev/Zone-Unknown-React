const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;

const messageSchema = new Schema({
    author: { type: String, required: true },
    message: { type: String, required: true },
});

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;