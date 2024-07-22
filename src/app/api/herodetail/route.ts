import { QUERY } from "../../utils/fetching/queryParams"
import apiClient from "../../utils/fetching/marvelBaseURL"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
  console.log("Entered GET server API for hero detail")

  try {
    const url = new URL(req.url)
    console.log("Parsed URL:", url)

    const characterId = url.searchParams.get("characterId")
    console.log("Character ID:", characterId)

    if (!characterId) {
      console.error("No character ID provided")
      return NextResponse.json(
        { error: "characterId is required" },
        { status: 400 },
      )
    }

    console.log(`Fetching details for character ID: ${characterId}`)

    const response = await apiClient.get(`characters/${characterId}${QUERY}`)
    console.log("API Response:", response)

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
