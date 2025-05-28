import { allPosts } from "@/.contentlayer/generated";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import Mdx from "@/components/mdx-component";

/**
 *　@description 注目している記事のデータを取得する関数
 * @param slug 注目している記事のスラッグ
 * @returns　注目している記事のxつデータ
 */
async function getPostFromSlug(slug: string) {
  const post = allPosts.find((post) => post.slugAsParams === slug);
  return post;
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const slug = params.slug;
  const post = await getPostFromSlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="container mx-auto max-w-3xl py-6 lg:py-10">
      <div>
        {post.date && (
          <time>Published on {format(post.date, "yyyy/MM/dd")}</time>
        )}
        <h1 className="mt-2 font-extrabold text-4xl lg:text-5xl leading-tight">
          {post.title}
        </h1>
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 border rounded-md bg-muted"
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="mt-10" />
      <div className="py-6 text-center lg:py-10">
        <Link
          href={"/blog"}
          className={cn(buttonVariants({ variant: "ghost" }))}
        >
          すべての記事を見る
        </Link>
      </div>
    </article>
  );
}
