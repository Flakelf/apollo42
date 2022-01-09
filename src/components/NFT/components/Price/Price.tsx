import React from 'react'

import { Button } from 'ui/components'

import s from './Price.module.scss'

type PriceProps = {
  price: number
  available: number
}

const Price: React.FC<PriceProps> = ({ price, available }) => (
  <div className={s.gradient}>
    <div className={s.container}>
      <div>
        <p className={s.currentPrice}>current price</p>
      </div>
      <div className={s.priceAndAvailable}>
        <div>
          <p className={s.price}>{price} ETH</p>
        </div>
        <div>
          <p className={s.available}>{available} of 1 available</p>
        </div>
      </div>

      <Button className={s.button}>connect wallet</Button>
    </div>
  </div>
)

export { Price }
