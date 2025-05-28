import { allPosts } from "@/.contentlayer/generated";
import { format } from "date-fns";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  const posts = allPosts;

  return (
    <div className="container max-w-4xl py-6 lg:py-10 mx-auto px-4">
      <div>
        <div className="space-y-4">
          <h1 className="font-extrabold text-4xl lg:text-5xl tracking-tight">
            Blog🚀
          </h1>
          <p className="text-muted-foreground text-xl">
            ContentLayerとMDXで書いています。
          </p>
        </div>
      </div>
      <hr className="my-8" />
      <div className="grid sm:grid-cols-2 gap-10">
        {posts.map((post) => (
          <article className="relative flex flex-col space-y-2" key={post._id}>
            {post.image && (
              <Image
                className="rounded-md border bg-muted"
                src={post.image}
                alt={post.title}
                width={804}
                height={452}
              />
            )}
            <h2 className="text-2xl font-extrabold">{post.title}</h2>
            {post.description && (
              <p className="text-muted-foreground">{post.description}</p>
            )}
            {post.date && (
              <p className="text-sm text-muted-foreground">
                {format(post.date, "yyyy/MM/dd")}
              </p>
            )}
            <Link className="absolute inset-0" href={post.slug}></Link>
          </article>
        ))}
      </div>
    </div>
  );
}
