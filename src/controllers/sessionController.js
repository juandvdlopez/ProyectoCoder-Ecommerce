import jwt from 'jsonwebtoken'
import { config } from '../config/config.js';
import { UserDTO } from '../dto/UserDTO.js';

export const getCurrent = async (req, res) => { 
    res.setHeader('Content-Type','application/json');
    let token = req.cookies.tokenCookie
    //const userDTO = UserDTO.fromUser(req.user)
    //console.log(userDTO)

    try{
        let decoded = jwt.verify(token, config.SECRET)
        const userDTO = UserDTO.fromUser(decoded)
        console.log(`Rol: ${userDTO.role}`)
        //return res.status(200).json({ payload: `Estás autenticado`, user: userDTO })
        req.user=userDTO
        return next() 
    } catch (error) {
        return res.status(401).json({ payload: `Error al autenticar` })
    }
}

export const addProduct = async (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  return res.status(201).json({ payload: `Producto añadido` });
};