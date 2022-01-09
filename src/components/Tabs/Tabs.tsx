import React from 'react'
import cx from 'classnames'

import s from './Tabs.module.scss'

type TabsProps = {
  titles: string[]
}

const Tabs: React.FC<TabsProps> = ({ titles }) => {
  const [selectedTab, setSelectedTab] = React.useState(0)

  const createSelectedClass = (index: number) =>
    cx(s.tabButton, { [s.selected]: index === selectedTab })

  return (
    <div className={s.container}>
      <div className={s.tabs}>
        {titles.map((title, i) => (
          <button
            key={i}
            className={createSelectedClass(i)}
            onClick={() => setSelectedTab(i)}
          >
            <span>{title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export { Tabs }
