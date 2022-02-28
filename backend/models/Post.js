const mongoose = require ('mongoose');

const post = mongoose.Schema({
    title: { type: String, required: false },
    imageUrl: { type: String, required: false },
    description: { type: String, required: true },
    userId: { type: String, required: true },
});
 module.exports = mongoose.model('Post', post);