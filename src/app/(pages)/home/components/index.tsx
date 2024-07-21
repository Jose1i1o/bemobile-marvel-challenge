import SearchInput from "@/app/components/common/inputs/search-input/search"
import { Navbar } from "@/app/components/layout"
import GridLayout from "@/app/components/layout/grid-homepage"
import React from "react"

const HomePageBundle = () => {
  return (
    <>
      <Navbar isLoading={false} />
      <SearchInput />
      <GridLayout />
    </>
  )
}

export default HomePageBundle
