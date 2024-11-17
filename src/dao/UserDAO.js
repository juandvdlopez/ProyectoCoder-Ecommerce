import { userSchema } from './models/userModel.js';

export class UserDAO{
    static async getBy(filter={}){
        return await userSchema.findOne(filter).lean()
    }

    static async addUser(user={}){
        let newUser=await userSchema.create(user)
        return newUser.toJSON()
    }
    
    static async getAll(){
        return await userSchema.find({}).lean()
    }

    static async updateUser(id, user){
        return await userSchema.findOneAndUpdate({_id:id}, user,{new:true})
    }

    static async deleteUser(filter={}){
        return await userSchema.deleteOne(filter)
    }

    static async updateUserCart(id, newCart){
        return await userSchema.findOneAndUpdate({_id:id}, {cart: newCart},{new:true})
    }




} 