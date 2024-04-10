import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";
import { ListCustomerController } from "./controllers/ListCustomersController";
import { DeleteCustomerController } from "./controllers/DeleteCustomerController";
import { UpdateCustomersController } from "./controllers/UpdateCustomersController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get('/teste', async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true};
    })

    fastify.post('/createCustomer', async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateCustomerController().handle(request, reply)
    })

    fastify.get('/customers', async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListCustomerController().handle(request, reply);
    })

    fastify.delete('/deleteCustomer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteCustomerController().handle(request, reply);
    })

    fastify.put('/updateCustomer', async (request: FastifyRequest, reply: FastifyReply) => {
        return new UpdateCustomersController().handle(request, reply);
    })
}