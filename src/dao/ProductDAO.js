import { productSchema } from './models/productModel.js';
import mongoose from 'mongoose';

export class ProductDAO{
    static async getBy(filter={}){
        return await productSchema.findOne(filter).lean()
    }

    static async addProduct(product={}){
        let newProduct=await productSchema.create(product)
        return newProduct.toJSON()
    }
    
    static async updateProduct(id, product){
       
        return await productSchema.findOneAndUpdate(id, product,{new:true})
    }

    static async deleteProduct(filter={}){
        return await productSchema.deleteOne(filter)
    }

    static async getAll(){
        console.log('entró al dao getAll')
        return await productSchema.find({}).lean()
    }

    static async updateStock(id, newStock) {
        
     
        return await productSchema.findByIdAndUpdate({_id:id}, { stock: newStock }, { new: true });
      }




}
