import React from "react";
import LinkButton from "./LinkButton";
import WindowIcon from "./WindowIcon";

const exampleClass = [
  "flex",
  "items-center",
  "gap-2",
  "hover:underline",
  "hover:underline-offset-4",
];

const exampleLink =
  "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app";

export default function WindowLink(): React.ReactElement {
  return (
    <LinkButton 
      linkClass={exampleClass} 
      linkHref={exampleLink}
    >
      <WindowIcon />
      {"Examples"}
    </LinkButton>
  );
}