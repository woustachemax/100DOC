import NextAuth from "next-auth"
import CredentialsProvider from 'next-auth/providers/credentials';
// import jwt from 'jsonwebtoken'

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        name: 'Credentials',
        credentials: {
          username: { label: 'email', type: 'text', placeholder: '' },
          password: { label: 'password', type: 'password', placeholder: '' },
        },
        async authorize(credentials: any) {
            
            return {
                id: "user1"
            };
        },
      })

      //for auth using google
    // GoogleProvider({
    //     clientId: process.env.GOOGLE_CLIENT_ID || ""
    //     clientSecret: process.env.GOOGLE_CLIENT_ID || ""
    // })
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks:{
    jwt: ({token, user})=>{
        console.log(token)

        return token;
    }
  }
})

export { handler as GET, handler as POST }