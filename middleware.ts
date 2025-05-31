import { getToken } from "next-auth/jwt";
import withAuth from "next-auth/middleware";
import { NextResponse } from "next/server";

/**
 * @description ページ遷移を規制するミドルウェア
 */
export default withAuth(
  async function middleware(req) {
    // cookieに保存されているJWTトークンを取得
    const token = await getToken({ req });
    // トークンが存在するかどうかを確認フラグ
    const isAuth = !!token;
    // loginページもしくはregisterページにアクセスしているかどうかを確認
    const isAuthPage =
      req.nextUrl.pathname.startsWith("/login") ||
      req.nextUrl.pathname.startsWith("/register");
    // ダッシュボードページもしくはエディターページにアクセスしているかどうかを確認
    const isDashboardPage =
      req.nextUrl.pathname.startsWith("/dashboard") ||
      req.nextUrl.pathname.startsWith("/editor");

    // ログインしている状態でログインページもしくは新規会員登録ページにアクセスした場合はダッシュボードへリダイレクト
    if (isAuthPage && isAuth) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }

    // ログインしていない状態でダッシュボードページもしくはエディターページにアクセスした場合はログインページへリダイレクト
    if (isDashboardPage && !isAuth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    // 通常のページ遷移（リダイレクトなし）
    return null;
  },
  { callbacks: { authorized: async () => true } }
);

/**
 * @description Tokenを取得するパスを指定
 */
export const config = {
  matcher: ["/dashboard/:path", "/editor/:path", "/login", "/register"],
};
