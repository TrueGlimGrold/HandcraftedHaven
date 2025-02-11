import NextAuth from "next-auth";
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import { sql } from '@vercel/postgres';
import type { User } from './app/database/definitiontype';
import bcrypt from  'bcrypt';

//function to get user and login them in.
import { JWT } from "next-auth/jwt";

export default {
    callbacks: {
        async jwt({ token, user }: { token: JWT; user?: User }) {
            if (user) {
                // Add custom user fields to the JWT token
                token.id = user.id;
                token.email = user.email;
            }
            return token;
        }
    }
};


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [
      Credentials({
          async authorize(credentials) {
              const parsedCredentials = z
                  .object({ email: z.string().email(), password: z.string().min(6) })
                  .safeParse(credentials);
  
              if (parsedCredentials.success) {
                  const { email, password } = parsedCredentials.data;
                  const user = await getUser(email);
                  if (!user) return null;
                  const passwordsMatch = await bcrypt.compare(password, user.password);
  
                  if (passwordsMatch) return user;
                  }
          
              console.log('Invalid Credentials');
              return null;
            },
        }),
    ],
});

