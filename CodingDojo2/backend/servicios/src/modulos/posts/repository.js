import mongoose from 'mongoose'
const { Schema } = mongoose;

const PostSchema = new Schema({
    userId: { type: Number },
    id: { type: Number },
    title: { type: String },
    body: { type: String }
});

module.exports = mongoose.model('Post', PostSchema);
