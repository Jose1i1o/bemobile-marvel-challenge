// export const experimental_ppr = true

import React from "react"
import { Badge } from "../../common/badge"
import { menuItems } from "./routes"
import FavouritesCounter from "../../common/counter/favourites-counter"

type NavbarProps = {
  isLoading: boolean
}

const Navbar = ({ isLoading }: NavbarProps) => {
  return (
    <nav className={`navigation ${isLoading ? "navigation--loading" : ""}`}>
      {menuItems?.map((item) => (
        <Badge
          key={item.key}
          href={item.path}
          tooltip={item.description}
          role={item.role}
          tabIndex={item.tabIndex}
        >
          {item.icon}
        </Badge>
      ))}
      {!isLoading ? <FavouritesCounter /> : null}
    </nav>
  )
}

export default Navbar
