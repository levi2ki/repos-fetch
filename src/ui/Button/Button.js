// @flow
import * as React from 'react'
import classNames from 'classnames'
import './Button.scss'

type TProps = {
  type?: string,
  htmlType?: 'submit' | 'reset' | 'button',
  size?: 'normal' | 'small',
  children?: React.Node,
  onClick?: Function,
}

export function Button({
  children,
  htmlType = 'submit',
  type = 'default',
  size = 'normal',
  onClick
}: TProps) {
  return (
    <button
      onClick={onClick}
      type={htmlType}
      className={classNames('btn', {
        "btn--default": type === 'default',
        "btn--size-normal": size === 'normal',
        "btn--size-small": size === 'small',
      })}
    >
      {children}
    </button>
  )
}
