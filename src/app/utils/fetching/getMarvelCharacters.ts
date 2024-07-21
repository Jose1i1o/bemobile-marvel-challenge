import {
  APICharactersResponse,
  MarvelAPI,
} from "../interfaces/marvel-api/characters"
import serverClient from "./serverAPI"

export const getMarvelCharacters = async (): Promise<APICharactersResponse> => {
  try {
    const response = await serverClient.get<MarvelAPI>("/api/characters", {
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
    // console.log("getMarvelCharacters finally")
  }
}
