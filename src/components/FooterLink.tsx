import React from "react";
import FileLink from "./FileLink";
import GlobeIcon from "./GlobeIcon";
import LinkButton from "./LinkButton";
import WindowLink from "./WindowLink";

const footerClass = [
  "row-start-3",
  "flex",
  "gap-[24px]",
  "flex-wrap",
  "items-center",
  "justify-center",
];

const nextClass = [
  "flex",
  "items-center",
  "gap-2",
  "hover:underline",
  "hover:underline-offset-4",
];

const nextLink =
  "https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app";

export default function FooterList(): React.ReactElement {
  return (
    <footer className={footerClass.join(" ")}>
      <FileLink />
      <WindowLink />
      <LinkButton 
        linkClass={nextClass} 
        linkHref={nextLink}
      >
        <GlobeIcon />
        {"Go to nextjs.org →"}
      </LinkButton>
    </footer>
  );
}
