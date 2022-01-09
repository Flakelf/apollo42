import React from 'react'

import s from './WidthContainer.module.scss'

const WidthContainer: React.FC = ({ children }) => (
  <div className={s.container}>{children}</div>
)

export { WidthContainer }
