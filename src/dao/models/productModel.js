import mongoose from "mongoose"

export const productSchema=mongoose.model(
    "Product",
    new mongoose.Schema(
        {
            title: {
                type: String,
                required: true
              },
              price: {
                type: Number,
                required: true, 
                min : 0
              },
              stock: {
                type: Number,
                required: true,
                min : 0
              },
              description: {
                type: String,
                required: true
              }
             
        },
        {
            timestamps: true, 
        }
    )
)