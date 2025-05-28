"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import Callout from "./Callout";

const components = {
  Image,
  Callout,
};

export default function Mdx({ code }: { code: string }) {
  const Component = useMDXComponent(code);
  return (
    <div>
      <div className="prose lg:prose-xl max-w-[720px]">
        <Component components={components} />
      </div>
    </div>
  );
}
