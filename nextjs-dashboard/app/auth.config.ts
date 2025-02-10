/*import NextAuthConfig from 'next-auth';

export const authConfig = {
    pages: {
        signIn: "/login", // Custom login page if needed
      },
      session: {
        strategy: "jwt", // Use JWT for session management
    },
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            // Add custom user fields to the JWT token
            token.id = user.id;
            token.email = user.email;
            token.privilege = user.privilege;
          }
          return token;
        },
        async session({ session, token }) {
          if (token) {
            session.user.id = token.id;
            session.user.email = token.email;
            session.user.privilege = token.privilege;
          }
          return session;
        },
      },
      secret: process.env.JWT_SECRET, // Use a secret for JWT signing
    };
*/
