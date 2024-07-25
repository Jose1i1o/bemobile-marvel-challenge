"use client"

import { useMarvelContext } from "../../../../context/marvelContext"
import React, { FC } from "react"

type Props = {}

const FavouritesCounter: FC<Props> = () => {
  const {
    marvelState: { favorites },
  } = useMarvelContext()

  console.log("favorites", favorites)

  return (
    <span className="navigation__favourites-text">{favorites?.length}</span>
  )
}

export default FavouritesCounter
