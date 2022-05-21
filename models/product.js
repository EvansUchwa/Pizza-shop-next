import mongoose, { Schema } from "mongoose";

const ProductSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    sizesAndPrices: { type: [Object], required: true },
    description: { type: String, required: true },
    createdAt: { type: String, default: new Date() }
})

export default mongoose.models.Product
    || mongoose.model('Product', ProductSchema);