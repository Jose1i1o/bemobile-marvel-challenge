import { getHeroById } from "@/app/utils/fetching/getHeroById"
import Image from "next/image"
import { Navbar } from "@/app/components/layout"

interface HeroDetailPageProps {
  params: {
    id: string
  }
}

const HeroDetailPage = async (props: HeroDetailPageProps) => {
  const {
    params: { id },
  } = props
  const { data } = await getHeroById(id)

  return (
    <>
      {data ? (
        <>
          <Navbar isLoading={false} />
          {data.map((hero: any) => (
            <section key={hero.id} className="hero-card">
              <Image
                src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                alt={hero.name}
                className="hero-card__thumbnail"
                width={500}
                height={500}
              />
              <div className="hero-card__body">
                <div className="hero-card__header">
                  <h1>{hero.name}</h1>
                  <section className="hero-card__favourites" role="button">
                    <svg
                      className="hero-card__favourites-icon"
                      role="img"
                      aria-labelledby="heart-icon-title"
                    >
                      <use href="/sprite.svg#heart-icon" />
                    </svg>
                  </section>
                </div>
                <p>{hero.description || "Description not available."}</p>
              </div>
            </section>
          ))}
          <h3>Comics</h3>
          <section className="hero-card__comics">
            {data.map((hero: any) =>
              hero.comics.items.map((comic: any) => (
                <div key={comic.resourceURI}>
                  {/* <Image
                    key={comic.resourceURI}
                    src={comic.resourceURI}
                    alt={comic.name}
                    width={100}
                    height={100}
                  /> */}
                  <p>{comic.name}</p>
                </div>
              )),
            )}
          </section>
        </>
      ) : (
        <Navbar isLoading={true} />
      )}
    </>
  )
}

export default HeroDetailPage
