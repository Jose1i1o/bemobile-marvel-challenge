"use client"
import { useMarvelContext } from "../../../../context/marvelContext"
import { useRouter, usePathname } from "next/navigation"
import React from "react"

type Props = {}

const ResultsCounter = (props: Props) => {
  const {
    marvelState: { results, favorites, filteredFavorites },
  } = useMarvelContext()

  const router = usePathname()
  const isHome = router === "/home"
  const isFavorites = router === "/favorites"

  const count = isHome
    ? results?.length || 0
    : isFavorites
      ? favorites?.length || 0
      : filteredFavorites?.length || 0
  const countLabel = count === 1 ? "RESULT" : "RESULTS"

  return (
    <>
      {count > 0 && (
        <p className="search__results">
          {count} {countLabel}
        </p>
      )}
    </>
  )
}

export default ResultsCounter
