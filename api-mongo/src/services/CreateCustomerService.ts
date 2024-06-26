import prismaClient from "../prisma";

interface CreateCustomerProps{
    name: string,
    email: string
}

class CreateCustomerService{ 
    async execute({name, email}: CreateCustomerProps) {

        if (!name || !email){
            throw new Error("Falta parametros")
        }

        const customer = await prismaClient.customer.create({
            data: {
                name,
                email,
                status: true
            }
        })

        console.log("rota foi chamada");
        return {customer};
    }
}

export {CreateCustomerService}