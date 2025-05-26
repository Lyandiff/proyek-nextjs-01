import React from "react";

// A
// type DeepReadonlyArray<aTa> = readonly (DeepReadonly<aTa>)[];
// type DeepReadonlyObject<aTa> = {
//   readonly [aPa in keyof aTa] : DeepReadonly<aTa[aPa]>;
// };
// type DeepReadonly<aTa> = aTa extends (infer aRa)[]
//   ? DeepReadonlyArray<aRa>
//   : aTa extends object
//   ? DeepReadonlyObject<aTa>
//   : aTa;

// interface LinkButtonProp extends React.PropsWithChildren {
interface LinkButtonProp {
  readonly children: React.ReactNode;
  readonly linkClass: readonly string[];
  readonly linkHref: string;
}

export default function LinkButton({
  linkHref,
  linkClass,
  children,
}: LinkButtonProp): React.ReactElement {
  return (
    <a
      className={linkClass.join(" ")}
      href={linkHref}
      rel={"noopener noreferrer"}
      target={"_blank"}
    >
      {children}
    </a>
  );
}
