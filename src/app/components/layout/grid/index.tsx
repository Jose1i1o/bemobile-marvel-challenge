import React from "react"

type Props = {}

const GridLayout = (props: Props) => {
  return (
    <div className="grid-layout__container">
      <div className="grid-layout__item" role="gridcell" tabIndex={4}>
        4
      </div>
      <div className="grid-layout__item" role="gridcell" tabIndex={5}>
        5
      </div>
      <div className="grid-layout__item" role="gridcell" tabIndex={6}>
        6
      </div>
      <div className="grid-layout__item" role="gridcell" tabIndex={7}>
        7
      </div>
      <div className="grid-layout__item" role="gridcell" tabIndex={8}>
        8
      </div>
      <div className="grid-layout__item" role="gridcell" tabIndex={9}>
        9
      </div>
    </div>
  )
}

export default GridLayout
