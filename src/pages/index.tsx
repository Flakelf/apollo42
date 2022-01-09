import React from 'react'
import Head from 'next/head'

import type { NextPage } from 'next'

import { NFT } from 'components'

const NFT_SRC = '/images/NFT.png'

const NFT_DATA = {
  author: 'Kaiju Kingz',
  NFTName: 'KaijuKing #2421',
  ownedBy: 'DORAandDOLLY',
  rarityScore: 352,
  likes: 1115,
  comments: 36,
  viewed: 2300,
  price: 3.1,
  available: 1,
  about:
    '3,333 Genesis Kaiju Kingz created by Augminted Labs to protect the metaverse. The community is all about growth and providing a place for the future of web3 to learn, build, and conquer. Join the Kingz and live forever as a legend. 6666 babies to accompany them.',
  src: NFT_SRC,
}

const Home: NextPage = () => (
  <React.Fragment>
    <Head>
      <title>Apollo 42</title>
      <meta name="description" content="NFT is so c00l" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <NFT {...NFT_DATA} />
  </React.Fragment>
)

export default Home
