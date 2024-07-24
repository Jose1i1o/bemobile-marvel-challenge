export const dynamic = "force-dynamic"

import { QUERY } from "../../utils/fetching/queryParams"
import apiClient from "../../utils/fetching/marvelBaseURL"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
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

    return NextResponse.json({
      data: response.data.data.results,
      status: response.status,
    })
  } catch (error) {
    console.error("Error fetching character details:", error)
    return NextResponse.json(
      { error: error || "An error occurred" },
      { status: 500 },
    )
  } finally {
    console.log("Fetch characters finally block")
  }
}
