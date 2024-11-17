import { TicketDAO } from '../dao/TicketDAO.js';
import { UserDAO } from '../dao/UserDAO.js';
import { ProductDAO } from '../dao/ProductDAO.js';



export class TicketService{

        static async purchaseCart(userId){
            
            
        let user = await UserDAO.getBy({_id:userId})
           
        if(!user){
            throw new Error('Usuario no encontrado')
        }

        let totalAmount = 0 ;
        let purchasedItems = []; 
        let notPurchasedItems = [];

        for (let i = 0; i < user.cart.length; i++) {
            
            const productId = {_id: user.cart[i].product}
         
            const product = await ProductDAO.getBy({_id: productId._id}) 
            console.log('producto comprado', product)
            
            if(!product){ 
                notPurchasedItems.push(user.cart[i])
                continue; 
            }

            if(product.stock >= user.cart[i].quantity){
                //console.log('hay suficiente stock')
                product.stock -= user.cart[i].quantity;
                //console.log('producto actualizado', product)    
                await ProductDAO.updateStock(product._id, product.stock);
                totalAmount += product.price * user.cart[i].quantity;
                purchasedItems.push(user.cart[i])
            } else {
                notPurchasedItems.push(user.cart[i])
            } 
        } 

        if (purchasedItems.length === 0){
            throw new Error('No es posible comprar todos los productos')
        } 

        let ticketData= { 
            amount: totalAmount, 
            purchaser: user.email,
           
        }
        console.log('ticketData', ticketData)
        
        const ticket= await TicketDAO.createTicket(ticketData); 
        user.cart = notPurchasedItems
        await UserDAO.updateUserCart(userId, user.cart);
       
       return ticket;

    } 

    static async getTicketbyId(id){ 
        return await TicketDAO.getTicketbyId(id)
    }
}


