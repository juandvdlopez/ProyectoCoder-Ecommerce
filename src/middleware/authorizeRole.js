import req from 'express/lib/request.js';
import { passportCall } from '../util/util.js';

export const authorizeRole=(role)=>{
    
    return (req, res, next)=>{
        if (!req.user) {
            return res.status(401).json({ message: 'Unauthorized' });
          }
          if (!role.includes(req.user.role)) {
           
            return res.status(403).json({ message: 'Forbidden: Access denied' });
          }
          console.log(`Rol: ${req.user.role}`)
    
         //req.user = user;
          next();       
    }
    } 
   
