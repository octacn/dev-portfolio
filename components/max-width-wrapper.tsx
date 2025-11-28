import * as React from "react";

function MaxWidthWrapper({ children }: { children: React.ReactNode }) {
  return <main className="max-w-3xl mx-auto relative">{children}</main>;
}

function MaxWidthWrapperContainer({ children }: { children: React.ReactNode }) {
  return <div className="mt-14 mx-5 sm:mx-0">{children}</div>;
}

export { MaxWidthWrapper, MaxWidthWrapperContainer };
