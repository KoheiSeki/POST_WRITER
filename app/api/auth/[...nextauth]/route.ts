import NextAuth from "next-auth/next";
import { authOptions } from "../../../../lib/auth";

const handlers = NextAuth(authOptions);

export { handlers as GET, handlers as POST };
