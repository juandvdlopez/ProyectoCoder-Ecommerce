import { Router } from 'express';
//import { UserManager } from '../data/userManager.js';

import { postSignup, getError , postLogin, getLogout } from '../controllers/authController.js';
import passport from 'passport';
import { passportCall } from '../util/util.js';

export const router=Router(); 

router.get('/error', getError)


router.post('/signup', passportCall("signup") , postSignup)


router.post('/login', passport.authenticate ("login" , { session: false, failureRedirect: "/api/auth/error"})  , postLogin)

router.get("/logout", getLogout)



router.get('/',async (req,res)=>{
    console.log('Esto es una prueba') 
    res.send('Auth')
})

