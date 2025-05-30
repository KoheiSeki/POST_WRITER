import Link from "next/link";
import UserAuthForm from "@/components/user-auth-form";

export default function Login() {
  return (
    <div className="container flex flex-col justify-center h-screen items-center mx-auto w-full">
      <div className="sm:w-[350px] flex flex-col justify-center space-y-6">
        {/* ログイン */}
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-semibold tracking-tight">
            Welcome Back
          </h1>
          <p className="text-sm text-muted-foreground">
            メールアドレスを入力してログインできます。
          </p>
        </div>

        {/* ユーザー認証フォーム */}
        <UserAuthForm />

        {/* 新規会員登録 */}
        <p className="text-muted-foreground px-8 text-center text-sm">
          <Link className="underline underline-offset-4" href={"/register"}>
            アカウントを持っていませんか？
          </Link>
        </p>
      </div>
    </div>
  );
}
