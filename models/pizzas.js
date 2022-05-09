import mongoose, { Schema } from "mongoose";

const PizzaSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, required: true },
    price: { type: [Number], required: true },
    description: { type: String, required: true },
    types: { type: [String], required: true },
    createdAt: { type: String, default: new Date() }
})

export default mongoose.models.Pizza
    || mongoose.model('Pizza', PizzaSchema);