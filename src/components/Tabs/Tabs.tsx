import React from 'react'
import cx from 'classnames'

import s from './Tabs.module.scss'

type TabsProps = {
  selectedTab: string
  tabs: { title: string; onClick: () => void }[]
}

const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab }) => (
  <div className={s.container}>
    <div className={s.tabs}>
      {tabs.map((tab, i) => {
        const className = cx(s.tabButton, {
          [s.selected]: tab.title === selectedTab,
        })

        return (
          <button key={i} className={className} onClick={tab.onClick}>
            <span>{tab.title}</span>
          </button>
        )
      })}
    </div>
  </div>
)

export { Tabs }
