const bcrypt = require('bcrypt');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function POST (request, response) {
    try {
        const form = await request.body

        const existingEmail = await prisma.employer.findFirst( { where: { email: form.email } } )

        const existingPhone = await prisma.employer.findFirst( { where: { phone: form.phone } } )

        if (existingEmail) {
            response.status(500).json({ error: 'Email Already In Use'});
        } else if (existingPhone) {
            response.status(500).json({ error: 'Phone Number Already In Use'});
        } else {

            const hash = await bcrypt.hash(form.password, 10);

            await prisma.employer.create({
                data: {
                    name: form.name,
                    email: form.email,
                    password: hash,
                    phone: form.phone,
                    role: "admin",
                }
            })

            response.status(200).json({ success: true });

        }

    } catch (error) {

        console.error('Error:', error);
        response.status(500).json({ error: 'Internal Server Error' });

    }
}