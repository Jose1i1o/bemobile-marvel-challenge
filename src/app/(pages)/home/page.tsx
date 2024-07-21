import dynamic from "next/dynamic"
import { Navbar } from "@/app/components/layout"

const HomePageBundle = dynamic(() => import("./components"))

export default function HomePage() {
  return (
    <>
      <HomePageBundle />
    </>
  )
}
