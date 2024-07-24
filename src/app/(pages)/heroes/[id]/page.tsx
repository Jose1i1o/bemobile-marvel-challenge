import { FC } from "react"
import dynamic from "next/dynamic"

import { Navbar } from "@/app/components/layout"

const DynamicHeroDetail = dynamic(() => import("./components/hero-detail"), {
  loading: () => <Navbar isLoading={true} />,
})
const DynamicComicList = dynamic(() => import("./components/comic-list"), {
  loading: () => <p>Loading...</p>,
})

export type HeroDetailPageProps = {
  params: {
    id: string
  }
}

const HeroDetailPage: FC<HeroDetailPageProps> = async (props) => {
  const {
    params: { id },
  } = props

  return (
    <>
      <DynamicHeroDetail params={{ id }} />
      <DynamicComicList params={{ id }} />
    </>
  )
}

export default HeroDetailPage
