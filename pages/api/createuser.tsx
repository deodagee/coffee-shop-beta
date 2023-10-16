import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltRounds = 10; // Number of salt rounds for bcrypt

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, username, password } = req.body;

    try {
      // Hash the password before storing it in the database
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const newUser = await prisma.users_table.create({
        data: {
          name,
          email,
          username,
          password: hashedPassword, // Store the hashed password in the database
        },
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Something went wrong' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}


