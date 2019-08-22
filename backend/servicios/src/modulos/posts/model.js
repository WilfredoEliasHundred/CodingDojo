const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    userId: { type: Number, required: true },
    id: { type: Number, required: true },
    title: { type: String, required: true },
    body: { type: String }
});

module.exports = mongoose.model('Post', PostSchema);