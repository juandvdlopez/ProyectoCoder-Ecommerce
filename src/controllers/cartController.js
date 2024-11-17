import { CartService } from '../services/Cart.service.js';


export const addToCart = async (req, res) => {
    
    try {
        console.log('Entró al addToCart', req.body)
        const { productId, quantity, userId } = req.body;
        
        const updatedCart = await CartService.addToCart(userId, productId, quantity);
        res.status(200).json(updatedCart);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }

} 


export const removeFromCart = async (req, res) => {
    try {
        const userId = req.user.id;
        const cart = await CartService.removeFromCart(userId);
        res.status(200).json(cart);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
} 

export class CartController {
    static async addToCart(req, res) {
        try {
            const { productId, quantity, userId } = req.body;
           // const userId = req.user.id; // Asumiendo que `req.user` proviene de autenticación
            const updatedCart = await CartService.addToCart(userId, productId, quantity);
            res.status(200).json(updatedCart);
          } catch (error) {
            res.status(400).json({ message: error.message });
          }
        };

    

    static async removeFromCart(req, res) {
            try {
                const userId = req.user.id;
                const cart = await CartService.removeFromCart(userId, productId);
                res.status(200).json(cart);
              } catch (error) {
                res.status(400).json({ message: error.message });
              }
        } 
    
}
