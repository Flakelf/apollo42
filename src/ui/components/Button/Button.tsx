import React from 'react'
import cx from 'classnames'

import s from './Button.module.scss'

type ButtonProps = {
  className?: string
}

const Button: React.FC<ButtonProps> = ({ className, children }) => {
  const controlClassName = cx(s.control, className)

  return <button className={controlClassName}>{children}</button>
}

export { Button }
