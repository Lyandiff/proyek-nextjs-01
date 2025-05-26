import React from "react";
import LinkButton from "./LinkButton";
import VercelImage from "./VercelImage";

const vercelClass = [
  "rounded-full",
  "border",
  "border-solid",
  "border-transparent",
  "transition-colors",
  "flex",
  "items-center",
  "justify-center",
  "bg-foreground",
  "text-background",
  "gap-2",
  "hover:bg-[#383838]",
  "dark:hover:bg-[#ccc]",
  "font-medium",
  "text-sm",
  "sm:text-base",
  "h-10",
  "sm:h-12",
  "px-4",
  "sm:px-5",
  "sm:w-auto",
];

const vercelLink =
  "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app";

const docsLink =
  "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app";

  const docsClass = [
  "rounded-full",
  "border",
  "border-solid",
  "border-black/[.08]",
  "dark:border-white/[.145]",
  "transition-colors",
  "flex",
  "items-center",
  "justify-center",
  "hover:bg-[#f2f2f2]",
  "dark:hover:bg-[#1a1a1a]",
  "hover:border-transparent",
  "font-medium",
  "text-sm",
  "sm:text-base",
  "h-10",
  "sm:h-12",
  "px-4",
  "sm:px-5",
  "w-full",
  "sm:w-auto",
  "md:w-[158px]",
];

export default function LinkList(): React.ReactElement {
  return (
    <div className={"flex gap-4 items-center flex-col sm:flex-row"}>
      <LinkButton 
        linkClass={vercelClass} 
        linkHref={vercelLink}
      >
        <VercelImage />
        {"Deploy now"}
      </LinkButton>
      <LinkButton 
        linkClass={docsClass} 
        linkHref={docsLink}
      >
        {"Read our docs"}
      </LinkButton>
    </div>
  );
}
