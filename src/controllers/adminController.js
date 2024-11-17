import mongoose from 'mongoose';
import { UserDAO } from '../dao/UserDAO.js';

export class AdminController {
    static async getUsers(req, res) { 

        try {
        console.log('Entró al try del getUsers')
        let users = await UserDAO.getAll();
        res.setHeader('Content-Type','application/json');
        return res.status(200).json(users);
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({ payload: `Error al obtener los usuarios` })
        }
    }
    
} 
