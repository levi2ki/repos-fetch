// @flow
import * as React from 'react'
import { Select } from '../../ui/Select'
import { LICENSES_LIST } from './constants'


type TProps = {
  name: string,
}

export function LicenseSelect({ name }: TProps) {
  return (
    <Select
      clearable
      data={LICENSES_LIST}
      name={name}
      label="select license"
    />
  )
}
