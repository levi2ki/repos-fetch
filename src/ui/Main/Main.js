// @flow
import * as React from 'react'
import classNames from 'classnames'
import './Main.scss'

type TProps = {
  children?: React.Node
}
export function Main({ children }: TProps) {
  return (
    <main className={classNames('main')}>
      {children}
    </main>
  )
}
