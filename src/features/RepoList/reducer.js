import { FILTER_CHANGED, REPO_FETCH_FAILED, REPO_FETCH_SUCCESS, REPO_FETCHING } from './constants'


export const initialState = {
  isLoading: false,
  data: [],
  error: false,
  filter: '',
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REPO_FETCHING:
      return {
        ...state,
        error: false,
        isLoading: true,
      }
    case REPO_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
        error: false,
      }
    case REPO_FETCH_FAILED:
      return {
        ...state,
        error: true,
        isLoading: false,
        data: action.payload,
      }
    case FILTER_CHANGED:
      return {
        ...state,
        filter: action.payload,
      }
    default:
      return state
  }
}
