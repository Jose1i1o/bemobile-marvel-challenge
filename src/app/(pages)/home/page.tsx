import SearchInput from "@/app/components/common/inputs/search-input/search"
import { Navbar } from "@/app/components/layout"
import GridLayout from "@/app/components/layout/grid"
import dynamic from "next/dynamic"

const DynamicNavbar = dynamic(() => import("@/app/components/layout/menu"), {
  loading: () => <Navbar isLoading={true} />,
})

export default function HomePage() {
  return (
    <>
      <DynamicNavbar isLoading={false} />
      <SearchInput />
      <GridLayout />
    </>
  )
}
