import mongoose from 'mongoose';

const bookSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    bookedProperty: {
        location: { type: String, required: true},
        image: { type: String, required: true},
        rent: { type: String, required: true},
        noofrooms: { type: Number, required : true},
        property: { type: mongoose.Schema.Types.ObjectId,
             required: true,
             ref: 'Property',
            },
        
    },

}, {
    timestamps: true,
})

const Book = mongoose.model('Book', bookSchema)

export default Book;