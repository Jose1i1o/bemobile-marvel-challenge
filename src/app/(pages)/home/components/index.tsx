import React from "react"
import dynamic from "next/dynamic"
import { Navbar } from "@/app/components/layout"

const DynamicSearchInput = dynamic(
  () => import("@/app/components/common/inputs/search-input/search"),
)

const DynamicGridHome = dynamic(
  () => import("@/app/components/layout/grid/grid-home"),
)

const HomePageBundle = () => {
  return (
    <>
      <Navbar isLoading={false} />
      <DynamicSearchInput />
      <DynamicGridHome />
    </>
  )
}

export default HomePageBundle
