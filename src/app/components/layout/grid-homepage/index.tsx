"use client"

import React, { FC } from "react"
import GridLayout from "./grid-homepage"
import { useMarvelContext } from "@/context/marvelContext"

type Props = {}

const GridHomepage: FC<Props> = () => {
  const { marvelState } = useMarvelContext()

  // pass the marvelState to the grid layout as children so that we can use server-side rendering
  return <GridLayout marvelState={marvelState} />
}

export default GridHomepage
