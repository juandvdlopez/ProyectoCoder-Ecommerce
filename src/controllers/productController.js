import { ProductService } from '../services/Product.service.js';


export class ProductController {
    static async getAll(req, res) { 
        try {
            const products = await ProductService.getAll();
            res.setHeader('Content-Type','application/json');
            return res.status(200).json(products);
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({ payload: `Error al obtener los productos` })
        }
    }
    static async getBy(req, res) { 
        try {
            const product = await ProductService.getBy(req.query);
            res.setHeader('Content-Type','application/json');
            return res.status(200).json(product);
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({ payload: `Error al obtener el producto` })
        }
    }   
    static async addProduct(req, res) { 
        try {
            
            const product = await ProductService.addProduct(req.body);
            res.setHeader('Content-Type','application/json');
            return res.status(201).json(product);
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({ payload: `Error al agregar el producto` })
        }
    }
    static async update(req, res) { 
        try {
          
            const product = await ProductService.update(req.params.id, req.body);
            res.setHeader('Content-Type','application/json');
            return res.status(200).json(product);
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({ payload: `Error al actualizar el producto` })
        }
    }

    static async delete(req, res) { 
        try {
            const product = await ProductService.delete(req.params.id);
            res.setHeader('Content-Type','application/json');
            return res.status(200).json(product);
        } catch (error) {
            res.setHeader('Content-Type','application/json');
            return res.status(500).json({ payload: `Error al eliminar el producto` })
        }
    }

}       


