import {
  APICharactersResponse,
  MarvelAPI,
} from "../interfaces/marvel-api/characters"
import serverClient from "./serverAPI"

export const getHeroComics = async (
  id: string,
): Promise<APICharactersResponse> => {
  try {
    const response = await serverClient.get(`/api/comics?characterId=${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })

    console.log("getHeroComics response", response)

    return {
      status: response.data.status,
      data: response.data.data,
    }
  } catch (error) {
    console.error("getMarvelComics error", error)
    return {
      status: 500,
      data: [] as any,
    }
  } finally {
    // console.log("getMarvelComics finally")
  }
}
