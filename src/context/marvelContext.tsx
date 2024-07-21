"use client"

import React, {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react"
import { getMarvelCharacters } from "@/app/utils/fetching/getMarvelCharacters"
import { marvelReducer } from "./actions"
import { Navbar } from "@/app/components/layout"
import { searchMarvelCharacters } from "@/app/utils/fetching/searchMarvelCharacters"

// Define the type for the context
type MarvelContextProps = {
  marvelState: any[]
  handleSearch: (search: string) => void
  handleAddToFavorites: (character: any) => void
  handleRemoveFromFavorites: (character: any) => void
}

// Create the context with an undefined initial value
const MarvelContext = createContext<MarvelContextProps | undefined>(undefined)

const init = (initialArgs: any[]) => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("marvelState")
    if (storedData !== null) {
      return JSON.parse(storedData)
    }
  }
  return initialArgs
}

export const MarvelProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [initialArgs, setInitialArgs] = useState(null)

  useEffect(() => {
    const fetchInitialArgs = async () => {
      const { data } = await getMarvelCharacters()
      setInitialArgs(data as any)
      setIsLoading(false)
      if (typeof window !== "undefined") {
        localStorage.setItem("marvelState", JSON.stringify(data))
      }
    }
    fetchInitialArgs()
  }, [])

  const [marvelState, dispatch] = useReducer(
    marvelReducer,
    initialArgs as never,
    init as never,
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("marvelState", JSON.stringify(marvelState))
    }
  }, [marvelState])

  const handleSearch = async (search: string) => {
    console.log("search", search)
    const searchResults = await searchMarvelCharacters(search)
    console.log("searchResults", searchResults)
    dispatch({ type: "SEARCH", payload: searchResults.data.toString() })
  }

  const handleAddToFavorites = (character: any) => {
    dispatch({ type: "ADD_TO_FAVORITES", payload: character })
  }

  const handleRemoveFromFavorites = (character: any) => {
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: character })
  }

  if (isLoading) {
    return <Navbar isLoading={true} />
  }

  return (
    <MarvelContext.Provider
      value={{
        marvelState,
        handleSearch,
        handleAddToFavorites,
        handleRemoveFromFavorites,
      }}
    >
      {children}
    </MarvelContext.Provider>
  )
}

// Custom hook to use the Marvel context
export function useMarvelContext() {
  const context = useContext(MarvelContext)
  if (context === undefined) {
    throw new Error("useMarvelContext must be used within a MarvelProvider")
  }
  return context
}