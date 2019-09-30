// @flow
import * as React from 'react'
import './Link.scss'

type TProps = {
  href: string,
  target: string,
  children: React.Node,
}

export function Link(props: TProps) {
  return (
    <a
      href={props.href}
      target={props.target}
      className="link"
    >
      {props.children}
    </a>
  )
}
