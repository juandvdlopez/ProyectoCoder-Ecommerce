import { TicketService } from '../services/Ticket.service.js';

export class TicketController {
    static async purchaseCart(req, res) {
       
        try {
            const { cid } = req.params;
            console.log('Cid: ', cid)
            const ticket = await TicketService.purchaseCart(cid);
            res.status(200).json(ticket);
          } catch (error) {
            res.status(400).json({ message: error.message });
          }
        };

    

}
