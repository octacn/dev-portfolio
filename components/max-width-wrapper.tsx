import * as React from "react";

function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <main className="max-w-3xl mx-auto relative">{children}</main>;
}

function MaxWidthWrapperContainer({ children }: { children: React.ReactNode }) {
  return <div className="max-w-2xl mx-auto my-14">{children}</div>;
}

export { MaxWidthWrapper, MaxWidthWrapperContainer };
