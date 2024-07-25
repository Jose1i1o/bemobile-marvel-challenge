"use client"

import { useMarvelContext } from "@/context/marvelContext"
import React from "react"

type Props = {
  id: number
  className?: string
  tabIndex?: number
}

const FavouriteButton = ({ id, className, tabIndex }: Props) => {
  const {
    marvelState: { favorites },
    handleAddToFavorites,
    handleRemoveFromFavorites,
  } = useMarvelContext()

  // check if the item is in the favorites array
  const isFavorite = favorites.some((favorite) => favorite.id === id)

  if (isFavorite) {
    return (
      <svg
        className={className}
        role="button"
        aria-labelledby="heart-icon-title"
        onClick={() => handleRemoveFromFavorites(id)}
        tabIndex={tabIndex}
      >
        <use href="/sprite.svg#heart-icon-liked" />
      </svg>
    )
  }

  return (
    <svg
      className={className}
      role="button"
      aria-labelledby="heart-icon-title"
      onClick={() => handleAddToFavorites(id)}
      tabIndex={tabIndex}
    >
      <use href="/sprite.svg#heart-icon-unliked" />
    </svg>
  )
}

export default FavouriteButton
