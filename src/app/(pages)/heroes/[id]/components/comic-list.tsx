export const maxDuration = 300
export const dynamicParams = true

import React from "react"
import Image from "next/image"

import { getHeroComics } from "@/app/utils/fetching/getHeroComics"
import { HeroDetailPageProps } from "../page"

const ComicList: React.FC<HeroDetailPageProps> = async ({ params: { id } }) => {
  const { data: comics } = await getHeroComics(id)
  console.log("comics", comics)

  return (
    <section className="hero-comics">
      <h3 className="hero-comics__header-title">COMICS</h3>
      <article className="hero-comics__slider">
        {comics ? (
          comics?.map(({ id, title, dates, thumbnail }) => (
            <div key={id} className="hero-comics__item">
              <div className="hero-comics__thumbnail-container">
                <Image
                  src={thumbnail}
                  alt={title}
                  className="hero-comics__thumbnail"
                  width={100}
                  height={150}
                  priority={true}
                  quality={100}
                />
              </div>
              <h4 className="hero-comics__title">{title}</h4>
              <p className="hero-comics__year">{dates.split("-")[0]}</p>
            </div>
          ))
        ) : (
          <p>No comics available</p>
        )}
      </article>
    </section>
  )
}

export default ComicList
