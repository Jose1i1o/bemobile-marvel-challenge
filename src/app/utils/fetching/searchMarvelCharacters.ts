import {
  APICharactersResponse,
  MarvelAPI,
} from "../interfaces/marvel-api/characters"
import serverClient from "./serverAPI"

export const searchMarvelCharacters = async (
  search: string,
): Promise<APICharactersResponse> => {
  try {
    const response = await serverClient.get<MarvelAPI>(
      `/api/search?nameStartsWith=${search}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    )
    return {
      status: response.status,
      data: response.data.data,
    }
  } catch (error) {
    console.error("searchMarvelCharacters error", error)
    return {
      status: 500,
      data: [] as any,
    }
  } finally {
    // console.log("searchMarvelCharacters finally")
  }
}
