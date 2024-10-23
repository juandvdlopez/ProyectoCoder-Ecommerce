import jwt from 'jsonwebtoken'
import { config } from '../config/config.js';


//import { UserManager } from '../data/userManager.js';


export const getError = (req, res) => {
    res.setHeader('Content-Type','application/json');
    res.status(401).send('Error al autenticar')
}

export const postSignup = async  (req, res) => {
    res.setHeader('Content-Type','application/json');
    return res.status(201).json({ payload: `Registro exitosos para ${req.user.firstName}` })

    /* try{  

        let user = await UserManager.addUser(req.body)
        res.send(user)
    } catch (error) {
        res.status(500).send(error)
        console.log ('Error al crear usuario')     
    }*/ 
    
  };

  export const postLogin = async  (req, res) => {

    let token = jwt.sign(req.user, config.SECRET, { expiresIn: 3600 })
    res.cookie ( "tokenCookie", token , { httpOnly: true })
    res.setHeader('Content-Type','application/json');
    //return res.status(201).json({ payload: `Login exitoso para ${req.user.firstName}`, userLogged: req.use, token})
    return res.status (201).json({ payload: `Login exitoso`, userLogged: req.user})
  }



  export const getLogout = (req, res) => {
   
        res.clearCookie('tokenCookie')
        res.setHeader('Content-Type','application/json');
        return res.status(200).json({ payload: `Logout exitoso` })


      
  }

  