import Image from "next/image"

const GridLayout = ({ marvelState }: any) => {
  console.log("marvelState", marvelState)
  if (marvelState.length === 0) {
    return (
      <section className="error-container">
        <p className="error-message">Pow! Something crashed!</p>
      </section>
    )
  }

  return (
    <>
      <section className="container">
        <span className="grid-layout">
          {marvelState ? (
            marvelState?.map(
              ({ id, thumbnail: { path, extension }, name }: any) => (
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
              ),
            )
          ) : (
            <section className="error-container">
              <p className="error-message">Zap! No heroes available!</p>
            </section>
          )}
        </span>
      </section>
    </>
  )
}

export default GridLayout
