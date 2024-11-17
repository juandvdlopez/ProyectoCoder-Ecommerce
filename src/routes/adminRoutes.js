import { Router } from 'express';
import { AdminController } from '../controllers/adminController.js';
import {ProductController} from '../controllers/productController.js'

//import { UserManager } from '../dao/UserManager.js';


export const router=Router()

router.get('/',async (req,res)=>{
    res.send('Admin')
})
 
router.get('/getUsers', AdminController.getUsers) 
router.get ('/getProducts' , async (req, res)=> { res.send('Get products')}) 
//router.get ('/getProducts', async (req,res)=> {console.log('entró a la ruta')},ProductController.getAll)
router.get ('/getProducts/:id', ProductController.getBy)
router.post ('/addProduct', ProductController.addProduct)
router.put ('/updateProduct/:id', ProductController.update)
router.delete ('/deleteProduct/:id', ProductController.delete)
