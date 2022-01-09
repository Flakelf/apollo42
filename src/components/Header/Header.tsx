import React from 'react'
import Link from 'next/link'

import { Apollo42, GlamourBurger } from 'ui/svg'
import { Input, Button } from 'ui/components'

import { IconWrapper } from 'components'

import s from './Header.module.scss'

const links = [
  {
    href: '/',
    title: 'market',
  },
  {
    href: '/',
    title: 'stats',
  },
  {
    href: '/',
    title: 'activity',
  },
  {
    href: '/',
    title: 'create',
  },
]

const Header = () => (
  <div className={s.container}>
    <div className={s.logo}>
      <Apollo42 />
    </div>
    <Input type="search" className={s.input} />
    <div className={s.links}>
      {links.map((link, i) => (
        <Link href={link.href} key={i}>
          <a>{link.title}</a>
        </Link>
      ))}
    </div>
    <Button className={s.button}>connect wallet</Button>
    <IconWrapper
      className={s.glamourBurger}
      icon={GlamourBurger}
      onClick={() => null}
    />
  </div>
)

export { Header }
