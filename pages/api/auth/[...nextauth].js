import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        name: { label: 'name', type: 'text' },
        username: { label: 'username', type: 'text' },
        password: { label: 'password', type: 'password' },
        email: { label: 'email', type: 'text' },
        // Add 'name' field here with appropriate label and type if needed
      },
      authorize: async (credentials) => {
        const { username, password } = credentials;

        try {
          const logUser = await prisma.users_table.findUnique({
            where: { username },
          });

          if (!logUser || logUser.password !== password) {
            return Promise.resolve({ status: 'error', error: 'Invalid credentials' });
          }

          // If the credentials are valid, return a success status along with the user data
          return Promise.resolve({
            status: 'success',
            user: {
              name: logUser.name,
              email: logUser.email,
              username: logUser.username,
              password: logUser.password,
              // Add 'name' field here if needed
            },
          });
        } catch (error) {
          console.error(error);
          return Promise.resolve({ status: 'error', error: 'Something went wrong' });
        }
      },
    }),
    // Add other providers here if needed
  ],
  secret: process.env.SECRET,
  session: {
    jwt: true,
  },

});
