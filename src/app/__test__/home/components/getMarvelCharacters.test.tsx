import { vi } from "vitest"

vi.mock("@/app/utils/fetching/getMarvelCharacters", () => ({
  getMarvelCharacters: vi.fn(),
}))

import { getMarvelCharacters } from "@/app/utils/fetching/getMarvelCharacters"
import { describe, it, expect } from "vitest"

describe("getMarvelCharacters", () => {
  it("returns correct data", async () => {
    // Define the expected mock data
    const mockData = {
      status: 200,
      data: [
        {
          id: 1,
          name: "Spider-Man",
          thumbnail: {
            path: "https://example.com/spiderman",
            extension: "jpg",
          },
        },
        {
          id: 2,
          name: "Iron Man",
          thumbnail: { path: "https://example.com/ironman", extension: "jpg" },
        },
      ],
    }

    // Set up the mock implementation
    ;(getMarvelCharacters as jest.Mock).mockResolvedValue(mockData)

    // Call the function
    const result = await getMarvelCharacters()

    // Assert the result
    expect(result).toEqual(mockData)
  })
})
