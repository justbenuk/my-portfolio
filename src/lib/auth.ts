import NextAuth, { NextAuthConfig } from 'next-auth'
import { compareSync } from 'bcrypt-ts-edge';
import Credentials from "next-auth/providers/credentials";
import { db } from './db';
import type { JWT as NextAuthJWT } from "next-auth/jwt";
import type { Session, User } from "next-auth";

export const config = {
  pages: {
    signIn: '/login',
    error: '/login'
  },
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    Credentials({
      credentials: {
        email: { type: "email" },
        password: { type: "password" },
      },
      authorize: async (credentials) => {
        //check to see if there are any credentials
        if (!credentials) return null;

        const user = await db.user.findFirst({
          where: {
            email: credentials.email as string,
          }
        });

        if (!user) return null;

        //check if the users exits and password matches
        if (
          user?.password &&
          compareSync(credentials.password as string, user.password)
        ) {
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            image: user.image,
          };
        }
        //if above fails
        return null
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: NextAuthJWT }) {
      //set the user id from the token
      if (session.user) {
        session.user.id = token.sub as string
        session.user.role = token.role as string
        session.user.name = token.name as string
        session.user.image = token.image as string
      }
      return session;
    },
    async jwt({ token, user, }: { token: NextAuthJWT; user?: User }) {
      //assign user fields to the token
      if (user) {
        token.id = user.id;
        token.role = user.role as string;
        token.image = user.image as string
      }
      return token;
    },
  },
} satisfies NextAuthConfig
export const { handlers, auth, signIn, signOut } = NextAuth(config)
