"use client"

import React, { FC, useEffect } from "react"
import GridLayout from "./grid-layout"
import { useMarvelContext } from "../../../../context/marvelContext"

type Props = {}

const GridHomepage: FC<Props> = () => {
  const {
    marvelState: { results },
  } = useMarvelContext()

  console.log("results", results)

  // pass the marvelState to the grid layout as children so that we can use server-side rendering
  return <GridLayout items={results} />
}

export default GridHomepage
