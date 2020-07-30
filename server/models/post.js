const mongoose= require('mongoose')
const {ObjectId} =mongoose.Schema

const postSchema = new mongoose.Schema({
    num:{
        type: String,
        trim: true,
        min: 3,
        max: 160,
        required: true
    },
    slug:{
        type: String,
        unique: true,
        index: true,
        lowercase: true
    },
    from:{
        type: String,
        required: true
    },
    fee:{
        type: String,
        default: '0',
        min: 2,
        required: true
    },
    content:{
        type: {},
        required: true,
        min: 20,
        max: 2000000
    },
    user:{
        type: String,
        default: 'Admin'
    }
}, {timestamps: true});

module.exports = mongoose.model('Post', postSchema); 