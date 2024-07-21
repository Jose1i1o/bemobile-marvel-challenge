import SearchInput from "@/app/components/common/inputs/search-input/search"
import { Navbar } from "@/app/components/layout"
import GridHomepage from "@/app/components/layout/grid-homepage"
import React from "react"

const HomePageBundle = () => {
  return (
    <>
      <Navbar isLoading={false} />
      <SearchInput />
      <GridHomepage />
    </>
  )
}

export default HomePageBundle
