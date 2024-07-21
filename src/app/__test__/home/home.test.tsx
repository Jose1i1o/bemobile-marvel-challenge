import { vi } from "vitest"
import { render, screen, waitFor } from "@testing-library/react"
import HomePage from "@/app/(pages)/home/page"
import { Navbar } from "@/app/components/layout"
import dynamic from "next/dynamic"

// Mock the next/dynamic import
vi.mock("next/dynamic", () => {
  return {
    __esModule: true,
    default: vi
      .fn()
      .mockImplementation((importFunc, { loading: LoadingComponent }) => {
        console.log("Mock dynamic import called")
        const DynamicComponent: React.FC & { loading?: React.FC } = () => (
          <div>HomePageBundle</div>
        )
        DynamicComponent.loading =
          LoadingComponent || (() => <Navbar isLoading={true} />)
        return DynamicComponent
      }),
  }
})

describe("HomePage", () => {
  it("renders the loading navbar while loading", async () => {
    // Override the mock implementation to use Navbar for loading state
    ;(dynamic as any).mockImplementation(
      (importFunc: any, { loading: LoadingComponent }: any) => {
        console.log("Mock dynamic import override called")
        const DynamicComponent: React.FC & { loading?: React.FC } = () => (
          <div>HomePageBundle</div>
        )
        DynamicComponent.loading =
          LoadingComponent || (() => <Navbar isLoading={true} />)
        return DynamicComponent
      },
    )

    // Render the component
    render(<HomePage />)

    // Wait for the loading component to be displayed
    waitFor(() => {
      expect(screen.getByRole("navigation")).toHaveClass("navigation")
    })
  })

  it("renders the HomePageBundle after loading", async () => {
    // Ensure the mock returns HomePageBundle after loading
    render(<HomePage />)

    // Wait for the HomePageBundle to be visible
    await waitFor(() => {
      expect(screen.getByText("HomePageBundle")).toBeInTheDocument()
    })
  })
})
