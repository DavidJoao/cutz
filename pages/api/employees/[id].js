import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function GET (request, response) {
    try {
        const {id} = request.query

        const employees = await prisma.employer.findUnique({
            where: {
                employer_id: parseInt(id)
            }, 
        }).employees()

        const allEmployees = employees.map(employee => {
            const { password, ...employeeWithoutPassword } = employee;
            return employeeWithoutPassword;
        });

        response.status(200).json({ success: true, allEmployees });

    } catch (error) {
        console.error('Error:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}