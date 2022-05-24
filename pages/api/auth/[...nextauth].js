import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
export default NextAuth({
  providers: [
    CredentialsProvider({
      id: "adminSignIn",
      name: "Email",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "sweeta@gmail.com",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        if (
          credentials.email == "07akhmadnur@gmail.com" &&
          credentials.password == "123"
        ) {
          return credentials;
        } else {
          return null;
        }
        // let data;
        // await axios
        //   .post("http://localhost:3000/api/auth/login", {
        //     credentials: JSON.stringify(credentials),
        //   })
        //   .then((res) => {
        //     console.log(res.data);
        //     data = res.data;
        //     if (res.data) {
        //       return res.data.data;
        //     } else {
        //       return null;
        //     }
        //   });
      },
    }),
  ],
  secret: process.env.SECRET,
  jwt: {
    secret: process.env.JWT_SECRET,
  },
});
