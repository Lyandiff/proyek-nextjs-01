import NextImage from "next/image";
import React from "react";
import { basePath } from "@/constants";

export default function GlobeIcon():React.ReactElement {
  return (
    <NextImage
      alt={"Globe icon"}
      aria-hidden
      height={16}
      src={`${basePath}/globe.svg`}
      width={16}
    />
  );
}
