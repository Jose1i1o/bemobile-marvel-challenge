import { render, screen } from "@testing-library/react"

// A simple version of GridLayout that accepts data as a prop
const TestGridLayout = ({ data }: { data: any[] }) => (
  <section className="grid-layout">
    {data.length > 0 ? (
      data.map(({ id, name }: any) => (
        <article key={id} className="card-layout__item">
          <p className="card-layout__item-name">{name}</p>
        </article>
      ))
    ) : (
      <section className="error-container">
        <p className="error-message">Zap! No heroes available!</p>
      </section>
    )}
  </section>
)

describe("TestGridLayout", () => {
  it("renders characters correctly when data is available", () => {
    const mockData = [
      { id: 1, name: "Spider-Man" },
      { id: 2, name: "Iron Man" },
    ]

    render(<TestGridLayout data={mockData} />)
    expect(screen.getByText("Spider-Man")).toBeInTheDocument()
    expect(screen.getByText("Iron Man")).toBeInTheDocument()
  })

  it("renders empty message when no data is available", () => {
    render(<TestGridLayout data={[]} />)
    expect(screen.getByText("Zap! No heroes available!")).toBeInTheDocument()
  })
})
