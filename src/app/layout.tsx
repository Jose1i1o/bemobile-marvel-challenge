import type { Metadata } from "next"
import { Roboto_Condensed } from "next/font/google"
import "./css/app.css"
import { Providers } from "./providers"

const robotoCondensed = Roboto_Condensed({
  display: "swap",
  subsets: [
    "latin",
    "latin-ext",
    "vietnamese",
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
  ],
})

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <title>Marvel</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </head>
      <body className={`light-mode ${robotoCondensed.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
