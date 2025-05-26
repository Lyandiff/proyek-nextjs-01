import NextImage from "next/image";
import React from "react";
import { basePath } from "@/constants";

export default function FileIcon():React.ReactElement {
  return (
    <NextImage
      alt={"File icon"}
      aria-hidden
      height={16}
      src={`${basePath}/file.svg`}
      width={16}
    />
  );
}
