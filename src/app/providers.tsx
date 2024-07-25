"use client"

import { MarvelProvider } from "../context/marvelContext"
import { NextUIProvider } from "@nextui-org/react"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <MarvelProvider>{children}</MarvelProvider>
    </NextUIProvider>
  )
}
