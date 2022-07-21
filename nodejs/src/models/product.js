import mongoose, { ObjectId } from "mongoose";

const productSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 5
    },
    priceOld: {
        type: Number,
        required: true
    }, 
    priceNew: {
        type: Number,
        required: true
    }, 
    slug: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: true
    },
    category: {
        type: ObjectId,
        ref: 'Category'
    },
}, { timestamps: true})

productSchema.index({ "title": "text"})

export default mongoose.model("Product", productSchema)