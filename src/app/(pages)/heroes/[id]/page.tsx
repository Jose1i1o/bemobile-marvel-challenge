export const dynamicParams = true

import { FC } from "react"
import HeroDetail from "./components/hero-detail"
import ComicList from "./components/comic-list"

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
      <HeroDetail params={{ id }} />
      <ComicList params={{ id }} />
    </>
  )
}

export default HeroDetailPage
