import React from "react"
import { Badge } from "../../common/badge"
import { menuItems } from "./routes"

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
          className="navigation__item"
        >
          {item.icon}
        </Badge>
      ))}
    </nav>
  )
}

export default Navbar
