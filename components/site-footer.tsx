import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer>
      <div className="container py-10 md:py-0 md:h-20 mx-auto">
        <p className="text-center text-sm md:text-left">
          Build by {""}
          <Link
            className="underline underline-offset-4 font-medium"
            href={siteConfig.links.x}
            target="_blank"
            rel="noreferrer"
          >
            Next.js
          </Link>
          .Hosted on {""}
          <Link
            className="underline underline-offset-4 font-medium"
            href={"https://vercel.com"}
            target="_blank"
            rel="noreferrer"
          >
            Vercel
          </Link>
        </p>
      </div>
    </footer>
  );
}
