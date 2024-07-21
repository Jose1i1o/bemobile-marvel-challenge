import { QUERY } from "../../utils/fetching/queryParams"
import apiClient from "../../utils/fetching/marvelBaseURL"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const { searchParams } = new URL(req.url)
    const response = await apiClient.get(
      `characters${QUERY}&limit=${10}&offset=${0}&nameStartsWith=${searchParams.get("nameStartsWith")}`,
    )
    return NextResponse.json({
      data: response.data.data.results,
      status: response.status,
    })
  } catch (error) {
    return NextResponse.json(error as any, { status: 500 })
  } finally {
    console.log("fetchCharacters finally")
  }
}
