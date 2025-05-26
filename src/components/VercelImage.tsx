import NextImage from "next/image";
import React from "react";
import { basePath } from "@/constants";

export default function VercelImage():React.ReactElement {
  return (
    <NextImage
      alt={"Vercel logomark"}
      className={"dark:invert"}
      height={20}
      src={`${basePath}/vercel.svg`}
      width={20}
    />
  );
}
