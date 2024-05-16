const bcrypt = require('bcrypt');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function POST (request, response) {
    try {

        const employers = await prisma.employer.findMany()
        const employerObjectArray = [];
        employers.map(employer => {
            employerObjectArray.push({
                employerName: employer.name,
                employerId: employer.employer_id
            })
        })

        response.status(200).json({ success: true, employerObjectArray });
        
    } catch (error) {

        console.error('Error:', error);
        response.status(500).json({ error: 'Internal Server Error' });

    }
}