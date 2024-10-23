import { Router } from 'express';
import { UserManager } from '../dao/UserManager.js';

export const router=Router()

router.get('/',async (req,res)=>{
    res.send('Admin')
})