import axios from "axios"
import { QUERY } from "../utils/fetching/queryParams"
import apiClient from "../utils/fetching/marvelBaseURL"

export async function GET(req: Request, res: Response) {
  try {
    const response = await apiClient.get(
      `characters${QUERY}&limit=${10}&offset=${0}`,
    )
    return Response.json({
      data: response.data.data.results,
      status: response.status,
    })
  } catch (error) {
    return Response.json(error as any, { status: 500 })
  } finally {
    console.log("fetchCharacters finally")
  }
}
