import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function GET(request, response) {
    try {
        const allEmployees = await prisma.employee.findMany()

        response.status(200).json({ success: true, allEmployees });
        
    } catch (error) {
        console.error('Error:', error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
}