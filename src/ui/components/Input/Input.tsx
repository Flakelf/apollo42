import React from 'react'
import cx from 'classnames'

import { Search } from 'ui/svg'

import s from './Input.module.scss'

type InputProps = {
  type?: 'search'
  placeholder?: string
  className?: string
}

const Input: React.FC<InputProps> = ({ placeholder, className, type }) => {
  const containerClassName = cx(className, s.container)

  return (
    <div className={containerClassName}>
      {type === 'search' && (
        <div className={s.icon}>
          <Search />
        </div>
      )}
      <input
        className={s.control}
        placeholder="Search items, collections and users"
      />
    </div>
  )
}

export { Input }
