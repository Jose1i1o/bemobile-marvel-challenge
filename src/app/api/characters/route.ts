import { QUERY } from "../../utils/fetching/queryParams"
import apiClient from "../../utils/fetching/marvelBaseURL"
import { NextRequest, NextResponse } from "next/server"
import { DEFAULT_LIMIT } from "@/app/utils/constants/variables"

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await apiClient.get(
      `characters${QUERY}&limit=${DEFAULT_LIMIT}&offset=${0}`,
    )

    const heroesData = response.data.data.results.map((hero: any) => {
      return {
        id: hero.id,
        name: hero.name,
        description: hero.description,
        thumbnail: {
          path: hero.thumbnail.path,
          extension: hero.thumbnail.extension,
        },
      }
    })

    return NextResponse.json({
      data: heroesData,
      status: response.status,
    })
  } catch (error) {
    return NextResponse.json(error as any, { status: 500 })
  } finally {
    // console.log("fetchCharacters finally")
  }
}
