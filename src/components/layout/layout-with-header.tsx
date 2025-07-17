import React from "react"
import { LayoutWithHeader as LayoutWithHeaderClient } from "./layout-with-header-client"

export const LayoutWithHeader = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return <LayoutWithHeaderClient>{children}</LayoutWithHeaderClient>
}
