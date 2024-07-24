export const dynamicParams = true
// export const experimental_ppr = true

import Image from "next/image"

import { Navbar } from "@/app/components/layout"
import { getHeroById } from "@/app/utils/fetching/getHeroById"
import { HeroDetailPageProps } from "../page"

export const dynamic = 'force-dynamic'

const HeroDetail: React.FC<HeroDetailPageProps> = async ({
  params: { id },
}) => {
  const { data } = await getHeroById(id)
  return (
    <>
      {data ? (
        <>
          <Navbar isLoading={false} />
          {data.map(
            ({
              id,
              name,
              description,
              thumbnail: { path, extension },
            }: any) => (
              <section key={id} className="hero-card">
                <Image
                  src={`${path}.${extension}`}
                  alt={name}
                  className="hero-card__thumbnail"
                  width={100}
                  height={100}
                  priority={true}
                  quality={100}
                />
                <div className="hero-card__body">
                  <div className="hero-card__header">
                    <h1>{name}</h1>
                    <section className="hero-card__favourites" role="button">
                      <svg
                        className="hero-card__favourites-icon"
                        role="img"
                        aria-labelledby="heart-icon-title"
                      >
                        <use href="/sprite.svg#heart-icon-unliked" />
                      </svg>
                    </section>
                  </div>
                  <p>{description || "Description not available."}</p>
                </div>
              </section>
            ),
          )}
        </>
      ) : (
        <Navbar isLoading={true} />
      )}
    </>
  )
}

export default HeroDetail
