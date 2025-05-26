import React from "react";
import FileIcon from "./FileIcon";
import LinkButton from "./LinkButton";

const learnClass = [
  "flex",
  "items-center",
  "gap-2",
  "hover:underline",
  "hover:underline-offset-4",
];

const learnLink =
  "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app";

export default function FileLink(): React.ReactElement {
  return (
    <LinkButton 
      linkClass={learnClass} 
      linkHref={learnLink}
    >
      <FileIcon />
      {"Learn"}
    </LinkButton>
  );
}
