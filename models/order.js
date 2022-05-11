import mongoose, { Schema } from "mongoose"

const orderSchema = new Schema({
    username: { type: String, required: true },
    address: { type: String, required: true },
    tel: { type: String, required: true },
    total: { type: Number, required: true },
    status: { type: Object, required: true }

})


export default mongoose.models.Order || mongoose.model('Order', orderSchema)