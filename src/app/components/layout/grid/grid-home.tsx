"use client"

import React, { FC, useEffect } from "react"
import GridLayout from "./grid-layout"
import { useMarvelContext } from "../../../../context/marvelContext"

type Props = {}

const GridHomepage: FC<Props> = () => {
  const {
    marvelState: { results },
    loading,
  } = useMarvelContext()

  // pass the marvelState to the grid layout as children so that we can use server-side rendering
  return <GridLayout items={results} loading={loading} />
}

export default GridHomepage
