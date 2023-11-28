const  { mongoose, Schema } = require('mongoose')

const uploadSchema = new mongoose.Schema({

    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    tag: {
        type: String,
        required: true,
    },
    image: {
        type: Object,
        required: true,
    }

}, {
    timestamps: true
})

const Image = mongoose.model('Image', uploadSchema)

exports.Image = Image;