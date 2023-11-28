import { Schema, model, models } from 'mongoose';

const ImageSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    // image: {
    //     type: String,
    // },

    // tag: {
    //     type: String,
    //     required: [true, 'Tag is required.'],
    // },

    title: {
        type: String,
        required: [true, 'Title is required.'],
    },


});

const Image = models.Image || model('Image', ImageSchema);

export default Image;