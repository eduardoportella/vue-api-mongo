import { FastifyRequest, FastifyReply } from "fastify";
import { UpdateCustomerService } from "../services/UpdateCustomerService";
class UpdateCustomersController{
    async handle(req: FastifyRequest, res: FastifyReply){
        const {id} = req.query as {id : string}
        const {name, email} = req.body as {name: string, email: string};
        
        const customerService = new UpdateCustomerService;

        const customer = await customerService.execute({id, name, email})

        res.send(customer);
 }
}

export {UpdateCustomersController}