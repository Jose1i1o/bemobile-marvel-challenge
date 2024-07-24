export const dynamic = "force-dynamic"
export const revalidate = false

import { QUERY } from "../../utils/fetching/queryParams"
import apiClient from "../../utils/fetching/marvelBaseURL"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("req", req)
  const maxComics = 20
  const comicList = []

  try {
    const url = new URL(req.url)

    const characterId = url.searchParams.get("characterId")

    if (!characterId) {
      console.error("No character ID provided")
      return NextResponse.json(
        { error: "characterId is required" },
        { status: 400 },
      )
    }

    const response = await apiClient.get(`characters/${characterId}${QUERY}`)
    const comics = response.data.data.results[0].comics.items

    for (let i = 0; i < comics.length && i < maxComics; i++) {
      const comic = comics[i]
      const comicIssue = comic.resourceURI.split("/").pop()
      console.log("Comic Issue Number:", comicIssue)

      const comicResponse = await apiClient.get(`comics/${comicIssue}${QUERY}`)

      const comicDetails = {
        id: comicResponse.data.data.results[0].id,
        title: comicResponse.data.data.results[0].title,
        thumbnail: `${comicResponse.data.data.results[0].thumbnail.path}.${comicResponse.data.data.results[0].thumbnail.extension}`,
        dates: comicResponse.data.data.results[0].dates[0].date,
      }

      comicList.push(comicDetails)

      /* short the comic list by the dates from the older to the newer */
      comicList.sort((a, b) => {
        const dateA: Date = new Date(a.dates)
        const dateB: Date = new Date(b.dates)

        return dateA.getTime() - dateB.getTime()
      })
    }

    return NextResponse.json({
      data: comicList,
      status: response.status,
    })
  } catch (error) {
    console.error("Error fetching comic details:", error)
    return NextResponse.json(
      { error: error || "An error occurred" },
      { status: 500 },
    )
  } finally {
    console.log("Fetch comics finally block")
  }
}
