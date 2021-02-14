import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
    },
    {
      timestamps: true,
    }
  )

const propertySchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    rent:{
        type: String,
        required: false,
        
    },
    reviews: [reviewSchema],
    rating:{
        type: Number,
        required: true,
        default: 0,
    },
    numReviews:{
        type: Number,
        required: true,
        default: 0,
    },
    noofrooms:{
        type: Number,
        required : true,
        default: 0,
    },
    availability:{
        type: Boolean,
        required: true,
        default: true,
    },

}, {
    timestamps: true,
})

const Property = mongoose.model('Property', propertySchema)

export default Property;