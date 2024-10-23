import jwt from 'jsonwebtoken'
import { config } from '../config/config.js';

export const getCurrent = async (req, res) => { 
    res.setHeader('Content-Type','application/json');
    let token = req.cookies.tokenCookie

    try{
        let decoded = jwt.verify(token, config.SECRET)
        return res.status(200).json({ payload: `Estás autenticado`, user: decoded })
    } catch (error) {
        return res.status(401).json({ payload: `Error al autenticar` })
    }
}