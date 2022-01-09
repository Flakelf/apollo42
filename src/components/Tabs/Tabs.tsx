import React from 'react'
import cx from 'classnames'

import s from './Tabs.module.scss'

type TabsProps = {
  titles: string[]
}

const Tabs: React.FC<TabsProps> = ({ titles }) => {
  const createSelectedClass = (index: number) =>
    cx(s.tabButton, { [s.selected]: index === 0 })

  return (
    <div className={s.container}>
      <div className={s.tabs}>
        {titles.map((title, i) => (
          <button key={i} className={createSelectedClass(i)}>
            {title}
          </button>
        ))}
      </div>
    </div>
  )
}

export { Tabs }
