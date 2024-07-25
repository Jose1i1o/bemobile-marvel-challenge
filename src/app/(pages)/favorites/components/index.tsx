import { Navbar } from "@/app/components/layout"
import { HERO_TITLE_FAVORITES_PAGE } from "@/app/utils/constants/variables"
import dynamic from "next/dynamic"

const DynamicSearchInput = dynamic(
  () => import("@/app/components/common/inputs/search-input/search-favorites"),
)

const DynamicGridFavorites = dynamic(
  () => import("@/app/components/layout/grid/grid-favorites"),
)

const FavouritesPageBundle = () => {
  return (
    <section>
      <Navbar isLoading={false} />
      <h1 className="hero__header-title">{HERO_TITLE_FAVORITES_PAGE}</h1>
      <DynamicSearchInput />
      <DynamicGridFavorites />
    </section>
  )
}

export default FavouritesPageBundle
