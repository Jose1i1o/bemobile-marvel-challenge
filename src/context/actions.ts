import { searchMarvelCharacters } from "@/app/utils/fetching/searchMarvelCharacters"

type MarvelInitialState = any[] // Define your actual type here

// Define union types for actions
type MarvelActionType =
  | { type: "SEARCH"; payload: {} }
  | { type: "ADD_TO_FAVORITES"; payload: any }
  | { type: "REMOVE_FROM_FAVORITES"; payload: any }

export const marvelReducer = (
  state: MarvelInitialState,
  action: MarvelActionType,
) => {
  switch (action.type) {
    case "SEARCH":
      return action.payload
    case "ADD_TO_FAVORITES":
      return [...state, action.payload]
    case "REMOVE_FROM_FAVORITES":
      return state.filter((character) => character.id !== action.payload.id)
    default:
      return state
  }
}
