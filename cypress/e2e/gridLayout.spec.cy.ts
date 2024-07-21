import { expect } from "chai"

describe("Grid Layout", () => {
  beforeEach(() => {
    cy.visit("/home") // Ensure this URL is correct
  })

  it("should display the grid layout correctly on mobile", () => {
    cy.wait(1000)
    cy.viewport(500, 559)
    cy.get(".container").invoke("css", "width", "500px")
    cy.get(".grid-layout")
      .should("be.visible")
      .and("have.css", "grid-template-columns")
      .then((columns) => {
        const expected = "repeat(2, 1fr)"
        const actual =
          String(columns).split(" ").length === 2 ? "repeat(2, 1fr)" : columns
        expect(actual).to.equal(expected)
      })
  })

  it("should display the grid layout correctly on tablet", () => {
    cy.wait(1000)
    cy.viewport(601, 900)
    cy.get(".container").invoke("css", "width", "601px")
    cy.get(".grid-layout")
      .should("be.visible")
      .and("have.css", "grid-template-columns")
      .then((columns) => {
        const expected = "repeat(4, 1fr)"
        const actual =
          String(columns).split(" ").length === 4 ? "repeat(4, 1fr)" : columns
        expect(actual).to.equal(expected)
      })
  })

  it("should display the grid layout correctly on desktop", () => {
    cy.wait(1000)
    cy.viewport(1024, 1600)
    cy.get(".container").invoke("css", "width", "1024px")
    cy.get(".grid-layout")
      .should("be.visible")
      .and("have.css", "grid-template-columns")
      .then((columns) => {
        const expected = "repeat(7, 1fr)"
        const actual =
          String(columns).split(" ").length === 7 ? "repeat(7, 1fr)" : columns
        expect(actual).to.equal(expected)
      })
  })
})
