// @flow
import * as React from 'react'
import { ControlledInput } from '../../ui/Input'
import { Link } from '../../ui/Link'
import { List } from '../../ui/List'
import { SearchForm } from '../SearchForm'
import { changeFilter, fetchRepos } from './actions'
import { initialState, reducer } from './reducer'


export function RepoList() {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const memoSubmit = React.useMemo(() => fetchRepos(dispatch), [dispatch])
  const memoChangeFilter = React.useMemo(() => changeFilter(dispatch), [dispatch])

  return (
    <div>
      <SearchForm form="repo_search" onSubmit={memoSubmit} />
      {state.isLoading && <Loading />}
      {state.error && <Error data={state.data} />}
      {!state.error && state.data.length > 0 && (
        <div style={{ margin: '16px 0' }}>
          <ControlledInput value={state.filter} onChange={memoChangeFilter} label="search" />
        </div>
      )}
      {!state.error && (
        <List>
          {
            state.data
              .filter(item => item.full_name.indexOf(state.filter) !== -1)
              .map(item => (
                <List.Item key={item.id}>
                  <Link
                    href={item.html_url}
                    target="_repo_view"
                  >
                    {item.full_name}
                  </Link>
                  &nbsp;
                  <span>{'\u2605'}{item.stargazers_count}</span>
                </List.Item>
              ))
          }
        </List>
      )}
    </div>
  )
}

function Loading() {
  return (
    <p>
      Loading, please wait...
    </p>
  )
}

function Error({ data }) {
  return data.map((err, key) => (
      <p style={{ color: 'red' }} key={String(key)}>{err.message}</p>
    ),
  )
}
