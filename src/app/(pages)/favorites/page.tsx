import dynamic from "next/dynamic"

const DynamicHomePageBundle = dynamic(() => import("./components"))

export default function FavouritesPage() {
  return <DynamicHomePageBundle />
}
