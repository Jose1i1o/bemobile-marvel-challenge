"use client"

export const maxDuration = 300
export const dynamicParams = true

import React, { ChangeEvent, FC, FormEvent, useEffect, useState } from "react"
import { useMarvelContext } from "../../../../../context/marvelContext"
import ResultsCounter from "../../counter/results-counter"

type Props = {}

const SearchInputHome: FC<Props> = () => {
  const { handleSearch } = useMarvelContext()
  const [formState, setFormState] = useState({
    search: "",
  })

  const { search } = formState

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  useEffect(() => {
    if (search.length <= 2) return

    const delayDebounceFn = setTimeout(() => {
      handleSearch(search)
    }, 800)

    return () => {
      clearTimeout(delayDebounceFn)
    }
  }, [search, handleSearch])

  return (
    <section className="search" aria-labelledby="search-label">
      <form
        className="search__input-wrapper"
        onSubmit={(e) => e.preventDefault()}
      >
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
          type="text"
          id="search-input"
          className="search__input"
          placeholder="SEARCH A CHARACTER..."
          aria-label="Search"
          role="search"
          tabIndex={3}
          name="search"
          onChange={handleChange}
          value={search}
        />
      </form>
      <ResultsCounter />
    </section>
  )
}

export default SearchInputHome
