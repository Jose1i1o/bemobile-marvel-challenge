"use client"

import React, { FC } from "react"
import GridLayout from "./grid-layout"
import { useMarvelContext } from "../../../../context/marvelContext"

type Props = {}

const GridFavoritesPage: FC<Props> = () => {
  const {
    marvelState: { favorites, filteredFavorites },
  } = useMarvelContext()

  // pass the marvelState to the grid layout as children so that we can use server-side rendering
  return <GridLayout items={favorites} filters={filteredFavorites}/>
}

export default GridFavoritesPage
