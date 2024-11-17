import { Router } from 'express';

import { getCurrent} from '../controllers/sessionController.js'
import { addToCart, removeFromCart } from '../controllers/cartController.js'
import { TicketController } from '../controllers/ticketController.js'




export const router=Router()

router.get('/current', getCurrent)

router.post('/add', addToCart)
router.delete('/remove', removeFromCart)

router.post('/:cid/purchase' , TicketController.purchaseCart)

//router.post('/:cid/purchase', async (req, res) => {console.log (' entro a la ruta purchase')}, TicketController.purchaseCart)







//router.post('/add', CartController.addToCart);
//router.delete('/remove/:productId', CartController.removeFromCart);
//router.get('/', CartController.getUserCart);

//router.get('/addProduct', addProduct)