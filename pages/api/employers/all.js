const bcrypt = require('bcrypt');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function POST (request, response) {
    try {

        const employers = await prisma.employer.findMany()
        const employersNames = employers.map(employer => employer.name)

        response.status(200).json({ success: true, employersNames });
        
    } catch (error) {

        console.error('Error:', error);
        response.status(500).json({ error: 'Internal Server Error' });

    }
}