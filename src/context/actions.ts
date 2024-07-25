export type CharacterProps = {
  id: number
  name: string
}

export type MarvelInitialState = {
  results: CharacterProps[] | { results: CharacterProps[] | string } | any
  favorites: CharacterProps[]
  filteredFavorites: CharacterProps[]
}

export type MarvelActionType =
  | { type: "SEARCH"; payload: any }
  | {
      type: "ADD_TO_FAVORITES"
      payload: CharacterProps | CharacterProps[] | any
    }
  | { type: "REMOVE_FROM_FAVORITES"; payload: number }
  | { type: "SEARCH_FAVORITES"; payload: CharacterProps[] }
  | { type: "UPDATE_STATE"; payload: MarvelInitialState }
  | { type: "INITIAL_STATE"; payload: MarvelInitialState }

export const marvelReducer = (
  state: MarvelInitialState,
  action: MarvelActionType,
): MarvelInitialState => {
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
          !state.favorites.some((character) => character.id === newHero.id),
      )
      return {
        ...state,
        favorites: [...state.favorites, ...filteredFavorites],
      }
    case "REMOVE_FROM_FAVORITES":
      return {
        ...state,
        favorites: state.favorites.filter(
          (character) => character.id !== action.payload,
        ),
      }
    case "SEARCH_FAVORITES":
      return {
        ...state,
        filteredFavorites: action.payload,
      }
    case "UPDATE_STATE":
    case "INITIAL_STATE":
      return action.payload
    default:
      return state
  }
}
