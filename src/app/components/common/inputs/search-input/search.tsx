import React from "react"

type Props = {}

const SearchInput: React.FC<Props> = () => {
  return (
    <section className="search" aria-labelledby="search-label">
      <div className="search__input-wrapper">
        <label
          id="search-label"
          className="search__label"
          htmlFor="search-input"
        >
          <span className="search__icon">
            <svg
              className="search__icon-svg"
              role="img"
              aria-labelledby="search-icon-title"
            >
              <use href="/sprite.svg#search-icon" />
            </svg>
          </span>
        </label>
        <input
          type="search"
          id="search-input"
          className="search__input"
          placeholder="SEARCH A CHARACTER..."
          aria-label="Search"
        />
      </div>
      <p className="search__results">50 RESULTS</p>
    </section>
  )
}

export default SearchInput
