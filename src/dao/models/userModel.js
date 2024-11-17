import mongoose from "mongoose"

//const {Schema} = mongoose;

export const userSchema=mongoose.model(
    "User",
    new mongoose.Schema(
        {
            firstName: { type: String, required: true },  
            lastName: { type: String, required: true },
            email: {type: String, unique: true, required: true},
            age: Number,
            password: {type: String, required: true},
            //cart: Array,
            role: { type: String, required: true, enum: ['user', 'admin'], default: 'user' },
            cart: {
              type: [{
                  product: {
                      type: mongoose.Schema.Types.ObjectId,
                      ref: 'Product',
                      required: true
                  },
                  quantity: { type: Number, required: true }
              }], default: [] } 
            /*cart: {
                items: [
                  {
                    productId: {
                      type: mongoose.Schema.Types.ObjectId,
                      ref: 'Product',
                      required: true

                    },
                    quantity: { type: Number, required: true} //required: true }
                  }
                ] 
              } , default: { items: [] }*/ 

        },
        
        {
            timestamps: true, 
        }
    )
)