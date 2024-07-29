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
import { searchMarvelCharacters } from "@/app/utils/fetching/searchMarvelCharacters"
import { MarvelActionType, MarvelInitialState, marvelReducer } from "./actions"
import { Navbar } from "@/app/components/layout"
import { getMarvelCharacters } from "../app/utils/fetching/getMarvelCharacters"
import { getHeroById } from "../app/utils/fetching/getHeroById"

type MarvelContextProps = {
  marvelState: {
    results: any[]
    favorites: any[]
    filteredFavorites: any[]
  }
  handleSearch: (search: string) => void
  handleAddToFavorites: (herodetail: any) => void
  handleRemoveFromFavorites: (character: any) => void
  handleSearchFavorites: (search: string) => void
  loading: boolean
}

// Create the context with an undefined initial value
const MarvelContext = createContext<MarvelContextProps | undefined>(undefined)

const init = (): MarvelInitialState => {
  if (typeof window !== "undefined") {
    const storedData = localStorage.getItem("marvelState")
    if (storedData) {
      return JSON.parse(storedData)
    }
  }
  return {
    results: [],
    favorites: [],
    filteredFavorites: [],
  }
}

export const MarvelProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  const [marvelState, dispatch] = useReducer<
    React.Reducer<MarvelInitialState, MarvelActionType>
  >(
    marvelReducer as React.Reducer<MarvelInitialState, MarvelActionType>,
    init(),
  )

  useEffect(() => {
    const fetchInitialArgs = async () => {
      try {
        const { data } = await getMarvelCharacters()
        // console.log("data initial state", data)
        dispatch({
          type: "INITIAL_STATE",
          payload: {
            results: data,
            favorites: [],
            filteredFavorites: [],
          },
        })
        localStorage.setItem(
          "marvelState",
          JSON.stringify({
            results: data.results,
            favorites: [],
            filteredFavorites: [],
          }),
        )
      } catch (error) {
        console.error("Error fetching initial data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchInitialArgs()
  }, [])

  useEffect(() => {
    const fetchLocalStorage = () => {
      const storedData = localStorage.getItem("marvelState")
      if (storedData) {
        dispatch({ type: "UPDATE_STATE", payload: JSON.parse(storedData) })
      }
    }
    fetchLocalStorage()
  }, [])

  useEffect(() => {
    localStorage.setItem("marvelState", JSON.stringify(marvelState))
  }, [marvelState])

  const handleSearch = async (search: string) => {
    setIsLoading(true)
    try {
      const searchResults = await searchMarvelCharacters(search)
      dispatch({ type: "SEARCH", payload: searchResults.data })
    } catch (error) {
      console.error("Error fetching character details:", error)
    } finally {
      setIsLoading(false)
    }
  }

  const handleSearchFavorites = async (search: string) => {
    if (search === "") {
      dispatch({ type: "SEARCH_FAVORITES", payload: [] })
      return
    }
    const filteredResults = marvelState?.favorites.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase())
    })
    dispatch({ type: "SEARCH_FAVORITES", payload: filteredResults })
  }

  const handleAddToFavorites = async (id: number) => {
    const heroDetailToString = id.toString()

    const existingHero = marvelState.results.find((hero: any) => {
      return hero.id === id
    })

    if (existingHero) {
      dispatch({ type: "ADD_TO_FAVORITES", payload: existingHero })
      return
    }

    if (!existingHero) {
      try {
        const { data } = await getHeroById(heroDetailToString)
        dispatch({ type: "ADD_TO_FAVORITES", payload: data })
      } catch (error) {
        console.error("Error adding character to favorites:", error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const handleRemoveFromFavorites = (id: number) => {
    const heroDetailToString = id
    dispatch({ type: "REMOVE_FROM_FAVORITES", payload: heroDetailToString })
  }

  if (isLoading) {
    return <Navbar isLoading={true} />
  }

  return (
    <MarvelContext.Provider
      value={{
        marvelState,
        loading: isLoading,
        handleSearch,
        handleAddToFavorites,
        handleRemoveFromFavorites,
        handleSearchFavorites,
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
