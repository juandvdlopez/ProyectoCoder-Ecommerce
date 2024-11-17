import { Router } from 'express';

import { getCurrent} from '../controllers/sessionController.js'
import { addToCart } from '../controllers/cartController.js'


export const router=Router()

router.get('/current', getCurrent)

router.post('/add', addToCart)

//router.post('/add', CartController.addToCart);
//router.delete('/remove/:productId', CartController.removeFromCart);
//router.get('/', CartController.getUserCart);

//router.get('/addProduct', addProduct)