import NextImage from "next/image";
import React from "react";
import { basePath } from "@/constants";

export default function WindowIcon():React.ReactElement {
  return (
    <NextImage
      alt={"Window icon"}
      aria-hidden
      height={16}
      src={`${basePath}/window.svg`}
      width={16}
    />
  );
}
