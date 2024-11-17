import mongoose from "mongoose"

export const ticketSchema=mongoose.model(
    "Order",
    new mongoose.Schema(
        {
            orderNumber: {type: String, unique: true},
            client: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "users"
            },
            products: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "products"
            },  
            totalPrice: {
                type: Number,
                required: true
            },
            status: {
                type: Boolean, default: false
            }
        },
        {
            timestamps:true
        }
    )
)