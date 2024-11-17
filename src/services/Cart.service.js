import { ProductDAO } from '../dao/ProductDAO.js';
import { UserDAO } from '../dao/UserDAO.js';

export class CartService{
    static async addToCart(userId, productId, quantity){
        let user = await UserDAO.getBy({_id:userId})
      
        if(!user){
            throw new Error('Usuario no encontrado')
        }
        let product = await ProductDAO.getBy({_id:productId})
        
        if(!product){
            throw new Error('Producto no encontrado')
        }

        if (product.stock < quantity){
            throw new Error('No hay suficiente stock')
        } 

        const itemIndex = user.cart.findIndex(item => item.product._id.toString() === productId);
        console.log("el indice es", itemIndex)
        if (itemIndex >= 0) {
            
          user.cart[itemIndex].quantity += quantity;
        } else {
            
          user.cart.push({ product: productId, quantity });
          console.log("el producto se añadió al carro", user)
        
        }

        await ProductDAO.updateStock(productId, product.stock - quantity);

        console.log('carrito actualizado', user.cart)
        return await UserDAO.updateUserCart(userId, user.cart);

    }

    async removeFromCart(userId, productId){ 
        let user = await UserDAO.getBy({_id:userId})
        if(!user){
            throw new Error('Usuario no encontrado')
        }

        user.cart = user.cart.filter(item => item.product._id.toString() !== productId);
    return await UserDAO.updateUserCart(userId, user.cart);

    } 

    async getUsetCart(userId){
        return await UserDAO.getBy({_id:userId})

    } 
} 