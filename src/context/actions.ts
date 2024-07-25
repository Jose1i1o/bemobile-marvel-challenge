export type MarvelInitialState = {
  results: any[]
  favorites: any[]
  filteredFavorites: any[]
}

// Define union types for actions
export type MarvelActionType =
  | { type: "SEARCH"; payload: {} }
  | { type: "ADD_TO_FAVORITES"; payload: any }
  | { type: "REMOVE_FROM_FAVORITES"; payload: any }
  | { type: "SEARCH_FAVORITES"; payload: any }

type CharacterProps = {
  id: number
  name: string
}

export const marvelReducer = (
  state: MarvelInitialState,
  action: MarvelActionType,
) => {
  switch (action.type) {
    case "SEARCH":
      return {
        ...state,
        results: action.payload,
      }
    case "ADD_TO_FAVORITES":
      const newFavorites = Array.isArray(action.payload)
        ? action.payload
        : [action.payload]

      const filteredFavorites = newFavorites.filter(
        (newHero) =>
          !state.favorites.some(
            (character: CharacterProps) => character.id === newHero.id,
          ),
      )
      return {
        ...state,
        favorites: [...state.favorites, ...filteredFavorites],
      }
    case "REMOVE_FROM_FAVORITES":
      const updatedFavorites = state.favorites.filter(
        (character: CharacterProps) => {
          return character.id !== parseInt(action.payload)
        },
      )
      return {
        ...state,
        favorites: updatedFavorites,
      }
    case "SEARCH_FAVORITES":
      return {
        ...state,
        filteredFavorites: action.payload,
      }
    default:
      return state
  }
}
