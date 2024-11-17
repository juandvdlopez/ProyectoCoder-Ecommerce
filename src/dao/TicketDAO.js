import { ticketSchema } from './models/ticketModel.js'; 

export class TicketDAO{ 
    static async createTicket(ticket){
        let newTicket=await ticketSchema.create(ticket)
        return newTicket.toJSON()
    }

    static async getTicketbyId(id){ 
        return await ticketSchema.findOne({_id:id})
    }   
}



