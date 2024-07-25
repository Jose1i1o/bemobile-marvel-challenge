export const maxDuration = 300
export const dynamicParams = true
// export const experimental_ppr = true

import Image from "next/image"

import { Navbar } from "@/app/components/layout"
import { getHeroById } from "@/app/utils/fetching/getHeroById"
import { HeroDetailPageProps } from "../page"
import FavouriteButton from "@/app/components/common/buttons/favourite-button"

export const dynamic = "force-dynamic"

const HeroDetail: React.FC<HeroDetailPageProps> = async ({
  params: { id },
}) => {
  const { data } = await getHeroById(id)
  return (
    <>
      <Navbar isLoading={false} />
      {data ? (
        <>
          {data?.map(
            ({
              id,
              name,
              description,
              thumbnail: { path, extension },
            }: any) => (
              <section key={id} className="hero-card" tabIndex={id}>
                <Image
                  src={`${path}/portrait_incredible.${extension}`}
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
                      <FavouriteButton
                        id={id}
                        className="hero-card__favourites-icon"
                      />
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
