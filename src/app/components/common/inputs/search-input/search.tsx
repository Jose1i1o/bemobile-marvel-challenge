"use client"

import React, { ChangeEvent, FC, FormEvent, useState } from "react"
import { searchMarvelCharacters } from "../../../../utils/fetching/searchMarvelCharacters"
import { useMarvelContext } from "@/context/marvelContext"

type Props = {}

const SearchInput: FC<Props> = () => {
  const [formState, setFormState] = useState({
    search: "",
  })

  const { marvelState, handleSearch } = useMarvelContext()

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target

    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!formState.search) return
    handleSearch(formState.search)
  }

  return (
    <section className="search" aria-labelledby="search-label">
      <form className="search__input-wrapper" onSubmit={handleSubmit}>
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
          role="search"
          tabIndex={3}
          name="search"
          onChange={handleChange}
          value={formState.search}
        />
      </form>
      {marvelState?.length > 0 && (
        <p className="search__results">
          {marvelState?.length}{" "}
          {marvelState?.length === 1 ? "RESULT" : "RESULTS"}
        </p>
      )}
    </section>
  )
}

export default SearchInput
