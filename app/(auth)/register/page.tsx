import Link from "next/link";
import UserAuthForm from "@/components/user-auth-form";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Register() {
  return (
    <div className="container grid flex-col lg:grid-cols-2 h-screen w-screen justify-center lg:max-w-none lg:px-0">
      <Link
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 md:left-8 md:top-8"
        )}
        href={"/login"}
      >
        ログイン
      </Link>
      <div className="h-full bg-muted lg:block hidden" />

      <div className="flex mx-auto">
        <div className="sm:w-[350px] flex flex-col justify-center space-y-6">
          {/* 新規会員登録 */}
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">
              アカウントの作成
            </h1>
            <p className="text-sm text-muted-foreground">
              メールアドレスを入力して新規会員登録できます。
            </p>
          </div>

          {/* 新規会員登録フォーム */}
          <UserAuthForm />

          {/* ログイン */}
          <p className="text-muted-foreground px-8 text-center text-sm">
            続けてクリックすれば私たちの
            <Link className="underline underline-offset-4" href={"/terms"}>
              利用規約
            </Link>
            と
            <Link className="underline underline-offset-4" href={"/privacy"}>
              プライバシーポリシー
            </Link>
            に同意したことになります。
          </p>
        </div>
      </div>
    </div>
  );
}
