import mongoose, { Schema } from "mongoose";

const IngrediantSchema = new Schema({
    name: { type: String, required: true },
    img: { type: String, default: null },
    price: { type: Number, required: true },
    createdAt: { type: String, default: new Date() }
})

export default mongoose.models.Ingrediant
    || mongoose.model('Ingrediant', IngrediantSchema);