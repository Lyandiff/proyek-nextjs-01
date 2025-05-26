import React from "react";
import NextImage from "next/image";
import FooterList from "@/components/FooterLink";
import GettingStarted from "@/components/GettingStarted";
import LinkList from "@/components/LinkList";
import { basePath } from "@/constants";

export default function HomePage(): React.ReactElement {
  return (
    <div className={"grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"}>
      <main className={"flex flex-col gap-[32px] row-start-2 items-center sm:items-start"}>
        <NextImage
          alt={"Next.js logo"}
          className={"dark:invert"}
          height={38}
          priority
          src={`${basePath}/next.svg`}
          width={180}
        />
        <GettingStarted />
        <LinkList />
      </main>
      <FooterList />
    </div>
  );
}

