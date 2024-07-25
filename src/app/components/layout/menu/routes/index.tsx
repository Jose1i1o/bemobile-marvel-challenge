export type MenuItemProps = {
  key: number
  path: string
  icon: JSX.Element
  title: string
  description: string
  tabIndex?: number
  role?: string
}

export const menuItems: MenuItemProps[] = [
  {
    key: 0,
    path: "/home",
    tabIndex: 1,
    role: "button",
    icon: (
      <svg
        className="navigation__marvel-logo"
        role="img"
        aria-labelledby="marvel-icon-title"
      >
        <use href="/sprite.svg#marvel-icon" />
      </svg>
    ),
    title: "Home",
    description: "Return to the home page",
  },
  {
    key: 1,
    path: "/favorites",
    tabIndex: 2,
    role: "button",
    icon: (
      <section className="navigation__favourites-container" role="button">
        <svg
          className="navigation__favourites-icon"
          role="img"
          aria-labelledby="heart-icon-title"
        >
          <use href="/sprite.svg#heart-icon-liked" />
        </svg>
      </section>
    ),
    title: "Favourites",
    description: "View your favourite characters",
  },
]
