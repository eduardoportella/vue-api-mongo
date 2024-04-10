import prismaClient from "../prisma";

interface UpdateCustomerProps {
    id: string,
    name: string,
    email: string
}

class UpdateCustomerService {
    async execute({id, name, email}: UpdateCustomerProps) {
        if (!id){
            throw new Error ("Não é possível atualizar os dados sem um id");
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where: {
                id: id
            }
        })

        if (!findCustomer){
            throw new Error("Não foi possível localizar este cliente");
        }

        await prismaClient.customer.update({
            where: {
                id: id
            },
            data: {
                name: name,
                email: email
            },
        })

        return {message: 'Cliente alterado com sucesso!'}
    }

}

export {UpdateCustomerService}