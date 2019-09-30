import * as React from 'react'
import { Button } from '../../ui/Button'
import { LicenseSelect } from '../LicenseSelect'
import './SearchForm.scss'


export function SearchForm({ form, onSubmit }) {
  return (
    <form name={form} onSubmit={onSubmit}>
      <div className="search-form">
        <LicenseSelect name="license" />
        <Button htmlType="submit" type="default">
          Get List
        </Button>
      </div>
    </form>
  )
}
