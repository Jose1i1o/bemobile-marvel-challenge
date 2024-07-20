import {
  APICharactersResponse,
  MarvelAPI,
} from "../interfaces/marvel-api/characters"
import { MY_PUBLIC_API } from "../constants/variables"
import serverClient from "./serverAPI"

export const getMarvelCharacters = async (): Promise<APICharactersResponse> => {
  try {
    const response = await serverClient.get<MarvelAPI>(`${MY_PUBLIC_API}/api`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    return {
      status: response.status,
      data: response.data.data,
    }
  } catch (error) {
    console.error("getMarvelCharacters error", error)
    return {
      status: 500,
      data: [] as any,
    }
  } finally {
    console.log("getMarvelCharacters finally")
  }
}
