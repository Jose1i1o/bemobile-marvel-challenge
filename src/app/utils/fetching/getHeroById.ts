import {
  APICharactersResponse,
  MarvelAPI,
} from "../interfaces/marvel-api/characters"
import serverClient from "./serverAPI"

export const getHeroById = async (
  id: string,
): Promise<APICharactersResponse> => {
  console.log("entro en getHeroById")

  try {
    const response = await serverClient.get<MarvelAPI>(
      `/api/herodetail?characterId=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    console.log("getMarvelCharacter response", response)
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
