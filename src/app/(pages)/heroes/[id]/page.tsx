import { FC } from "react"
import dynamic from "next/dynamic"

const DynamicHeroDetail = dynamic(() => import("./components/hero-detail"), {
  ssr: true
})
const DynamicComicList = dynamic(() => import("./components/comic-list"), {
  ssr: true,
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
