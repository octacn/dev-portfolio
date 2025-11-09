import * as React from "react"

export default function MaxWidthWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className="max-w-3xl mx-auto relative">{children}</main>
}
