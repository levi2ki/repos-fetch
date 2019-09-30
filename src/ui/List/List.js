// @flow
import * as React from 'react'
import classNames from 'classnames'
import './List.scss'


type TProps = {
  children?: React.Node
}

export function List(props: TProps) {
  return (
    <ul className={classNames('list')}>
      {props.children}
    </ul>
  )
}

List.Item = function(props: TProps) {
  return (
    <li className={classNames('list__item')}>
      {props.children}
    </li>
  )
}
