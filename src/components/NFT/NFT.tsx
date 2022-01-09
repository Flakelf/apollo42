import React from 'react'
import Image from 'next/image'

import { Tabs } from 'components'

import { Likes, Comments, Eye } from 'ui/svg'

import { kFormatter } from 'utils'

import { Price } from './components'

import s from './NFT.module.scss'

type NFTProps = {
  author: string
  NFTName: string
  ownedBy: string
  rarityScore: number
  likes: number
  comments: number
  viewed: number
  price: number
  available: number
  about: string
  src: string
}

const TABS_TITLES = ['details', 'attributes', 'analytics', 'comments']

const NFT: React.FC<NFTProps> = ({
  author,
  NFTName,
  ownedBy,
  rarityScore,
  likes,
  comments,
  viewed,
  price,
  available,
  about,
  src,
}) => (
  <div className={s.container}>
    <div className={s.imageContainer}>
      <Image
        src={src}
        alt="NFT-token"
        layout="responsive"
        priority
        width={556}
        height={556}
      />
    </div>
    <div className={s.info}>
      <div className={s.author}>
        <p>{author}</p>
      </div>
      <div className={s.NFTName}>
        <p>{NFTName}</p>
      </div>
      <div className={s.topBar}>
        <div className={s.data}>
          <div className={s.ownedBy}>
            <p>
              ownded by <span>{ownedBy}</span>
            </p>
          </div>
          <div className={s.right}>
            <div className={s.rarityScore}>
              <p>
                rarity score: <span>{rarityScore}</span>
              </p>
            </div>
            <div className={s.socialCounter}>
              <span>
                <Likes />
                <p>{likes}</p>
              </span>
            </div>
            <div className={s.socialCounter}>
              <span>
                <Comments />
                <p>{comments}</p>
              </span>
            </div>
            <div className={s.socialCounter}>
              <span>
                <Eye />
                <p>{kFormatter(viewed)}</p>
              </span>
            </div>
          </div>
        </div>
      </div>

      <Tabs titles={TABS_TITLES} />

      <Price price={price} available={available} />

      <div className={s.about}>
        <h4 className={s.aboutTitle}>
          About <span>Kaiju Kingz</span>
        </h4>
        <h5 className={s.aboutText}>{about}</h5>
      </div>
    </div>
  </div>
)

export { NFT }
