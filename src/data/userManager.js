import { userSchema } from './models/userModel.js';

export class UserManager{
    static async getBy(filter={}){
        return await userSchema.findOne(filter).lean()
    }

    static async addUser(user={}){
        let newUser=await userSchema.create(user)
        return newUser.toJSON()
    }
} 