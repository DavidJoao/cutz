const bcrypt = require('bcrypt');
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function POST (request, response) {
    try {
        await prisma.user.create({
            data: {
                first_name: 'David',
                second_name: 'Sandoval',
                dob: new Date('1999-08-06').toISOString(),
                email: 'davidsandoval596@gmail.com',
                password: '123456',
                phone: '6615835098'
            }
        })

        console.log(response)
    } catch (error) {
        console.log(error)
    }
}