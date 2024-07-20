import React from "react"
import { Badge } from "../../common/badge"

type NavbarProps = {
  isLoading: boolean
}

const Navbar = ({ isLoading }: NavbarProps) => {
  return (
    <nav className={`navigation ${isLoading ? "navigation--loading" : ""}`}>
      <Badge href="/home" tooltip="Return Home">
        <svg
          className="navigation__marvel-logo"
          role="img"
          aria-labelledby="marvel-icon-title"
        >
          <use href="/sprite.svg#marvel-icon" />
        </svg>
      </Badge>
      <section className="navigation__favourites-container">
        <Badge href="/home" tooltip="Return Home">
          <svg
            className="navigation__favourites-icon"
            role="img"
            aria-labelledby="heart-icon-title"
          >
            <use href="/sprite.svg#heart-icon" />
          </svg>
        </Badge>
        <span className="navigation__favourites-text">3</span>
      </section>
    </nav>
  )
}

export default Navbar
