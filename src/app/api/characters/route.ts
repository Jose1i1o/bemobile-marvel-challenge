import { QUERY } from "../../utils/fetching/queryParams"
import apiClient from "../../utils/fetching/marvelBaseURL"
import { NextRequest, NextResponse } from "next/server"
import { DEFAULT_LIMIT } from "@/app/utils/constants/variables"

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await apiClient.get(
      `characters${QUERY}&limit=${DEFAULT_LIMIT}&offset=${0}`,
    )
    return NextResponse.json({
      data: response.data.data.results,
      status: response.status,
    })
  } catch (error) {
    return NextResponse.json(error as any, { status: 500 })
  } finally {
    // console.log("fetchCharacters finally")
  }
}
