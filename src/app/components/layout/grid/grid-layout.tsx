import Image from "next/image"
import Link from "next/link"
import FavouriteButton from "../../common/buttons/favourite-button"
import { text } from "stream/consumers"

const GridLayout = ({ items, filters }: any) => {
  if (items.length === 0) {
    return (
      <section className="error-container">
        <p className="error-message">
          Bam! No heroes found! Looks like they took a day off!
        </p>
      </section>
    )
  }

  if (filters && filters.length > 0) {
    return (
      <>
        <section className="grid-container">
          <span className="grid-layout">
            {filters ? (
              filters.map(
                ({ id, name, thumbnail: { extension, path } }: any) => (
                  <article key={id} className="card-layout__item">
                    <Link
                      href={`/heroes/${id}`}
                      key={id}
                      tabIndex={id}
                      role="gridcell"
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Image
                        src={`${path}/portrait_fantastic.${extension}`}
                        alt={name}
                        className="card-layout__item-image"
                        role="button"
                        width={100}
                        height={100}
                        priority={true}
                        quality={100}
                      />
                    </Link>
                    <div className="card-layout__item-footer">
                      <p className="card-layout__item-name" role="button">
                        {name.toUpperCase()}
                      </p>
                      <FavouriteButton
                        id={id}
                        className="card-layout__item-favourite"
                        tabIndex={id + 1}
                      />
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

  return (
    <>
      <section className="grid-container">
        <span className="grid-layout">
          {items ? (
            items.map(({ id, name, thumbnail: { extension, path } }: any) => (
              <article key={id} className="card-layout__item">
                <Link
                  href={`/heroes/${id}`}
                  key={id}
                  role="gridcell"
                  tabIndex={id}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <Image
                    src={`${path}/portrait_fantastic.${extension}`}
                    alt={name}
                    className="card-layout__item-image"
                    width={100}
                    height={100}
                    priority={true}
                    quality={100}
                  />
                </Link>
                <div className="card-layout__item-footer">
                  <p className="card-layout__item-name" role="button">
                    {name.toUpperCase()}
                  </p>
                  <FavouriteButton
                    id={id}
                    className="card-layout__item-favourite"
                  />
                </div>
              </article>
            ))
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
