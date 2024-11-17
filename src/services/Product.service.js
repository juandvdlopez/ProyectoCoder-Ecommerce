import { ProductDAO } from '../dao/ProductDAO.js';

export class ProductService{
    static async getAll(){
        return await ProductDAO.getAll()
    }

    static async getBy(filter){
        return await ProductDAO.getBy(filter)
    }

    static async addProduct(product){
        return await ProductDAO.addProduct(product)
    }

    static async update(id, product){
        return await ProductDAO.updateProduct(id, product)
    }

    static async delete(id){
        return await ProductDAO.deleteProduct(id)
    }
}   