import mongoose from "mongoose"
import { v4 as uuidv4 } from 'uuid'; // Para generar códigos únicos





   export const ticketSchema = mongoose.model(
    "Ticket",
    new mongoose.Schema(
        {

            code: {
              type: String,
              unique: true,
              default: () => uuidv4(), // Autogenera un código único
            },
            purchase_datetime: {
              type: Date,
              default: Date.now, // Registra la fecha y hora actual
            },
            amount: {
              type: Number,
              required: true,
              min: 0,
            },
            purchaser: {
              type: String,
              required: true,
            },
          }
    )
    
    );
      



