import dynamic from "next/dynamic"

const HomePageBundle = dynamic(() => import("./components"))

export default function HomePage() {
  return (
    <>
      <HomePageBundle />
    </>
  )
}
