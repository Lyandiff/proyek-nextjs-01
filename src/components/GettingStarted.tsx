import React from "react";

const olClass = [
  "list-inside",
  "list-decimal",
  "text-sm/6",
  "text-center",
  "sm:text-left",
  "font-[family-name:var(--font-geist-mono)]",
];

const codeClass = [
  "bg-black/[.05]",
  "dark:bg-white/[.06]",
  "px-1",
  "py-0.5",
  "rounded",
  "font-[family-name:var(--font-geist-mono)]",
  "font-semibold",
];

export default function GettingStarted(): React.ReactElement {
  return (
    <ol className={olClass.join(" ")}>
      <li className={"mb-2 tracking-[-.01em]"}>
        {"Get started by editing "}
        <code className={codeClass.join(" ")}>
          {"src/app/page.tsx"}
        </code>
        {"."}
      </li>
      <li className={"tracking-[-.01em]"}>
        {"Save and see your changes instantly."}
      </li>
    </ol>
  );
}
