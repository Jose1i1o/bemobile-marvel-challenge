import dynamic from "next/dynamic"
import { Navbar } from "@/app/components/layout"

const HomePageBundle = dynamic(() => import("./components"), {
  loading: () => <Navbar isLoading={true} />,
})

export default function HomePage() {
  return (
    <>
      <HomePageBundle />
    </>
  )
}
