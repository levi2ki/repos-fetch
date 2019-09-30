import { Api } from '../../api/api'
import { FILTER_CHANGED, REPO_FETCH_FAILED, REPO_FETCH_SUCCESS, REPO_FETCHING } from './constants'


const api = new Api()

export const fetchRepos = dispatch => e => {
  e.preventDefault()
  dispatch({ type: REPO_FETCHING })
  const query = {}

  Array.from(e.target.elements).forEach(el => {
    if (el.name) {
      query[el.name] = el.value
    }
  })

  api.fetchRepos(query)
    .then(
      res => {
        dispatch({ type: REPO_FETCH_SUCCESS, payload: res.items })
      },
      err => {
        dispatch({ type: REPO_FETCH_FAILED, payload: JSON.parse(err.message).errors })
      },
    )
}

export const changeFilter = dispatch => e => {
  const payload = e.target.value
  dispatch({ type: FILTER_CHANGED, payload })
}
