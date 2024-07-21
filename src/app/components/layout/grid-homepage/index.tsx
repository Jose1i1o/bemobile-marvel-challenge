import { getMarvelCharacters } from "@/app/utils/fetching/getMarvelCharacters"
import Image from "next/image"

const GridLayout = async () => {
  const { status, data } = await getMarvelCharacters()

  if (status !== 200) {
    return (
      <section className="error-container">
        <p className="error-message">Pow! Something crashed!</p>
      </section>
    )
  }

  return (
    <>
      <section className="grid-layout">
        {data ? (
          data?.map(({ id, thumbnail: { path, extension }, name }: any) => (
            <article
              key={id}
              className="card-layout__item"
              role="gridcell"
              tabIndex={id}
            >
              <Image
                src={`${path}.${extension}`}
                alt={name}
                className="card-layout__item-image"
                width={100}
                height={100}
                priority={true}
                quality={100}
              />
              <div className="card-layout__item-footer">
                <p className="card-layout__item-name" role="button">
                  {name.toUpperCase()}
                </p>
                <svg
                  className="card-layout__item-favourite"
                  role="button"
                  aria-labelledby="heart-icon-title"
                >
                  <use href="/sprite.svg#heart-icon" />
                </svg>
              </div>
            </article>
          ))
        ) : (
          <section className="error-container">
            <p className="error-message">Zap! No heroes available!</p>
          </section>
        )}
      </section>
    </>
  )
}

export default GridLayout
