// @flow
import * as React from 'react'
import classNames from 'classnames'
import './Input.scss'

type TProps = {
  label: string,
  onChange: Function,
  size?: string,
  type?: string,
  value: string,
  name: string,
}

export function ControlledInput({
  type = 'text',
  value,
  onChange,
  name,
  label,
  size = 'default',
}: TProps) {
  return (
    <div>
      <label className="input-label" htmlFor={name}>{label}</label>
      <input
        className={classNames('input', {
          'input--size-small': size === 'small',
        })}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}
