export default function reducer(state={
    movies: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_NOW_SHOWING_MOVIE": {
        return {...state, fetching: true}
      }
      case "FETCH_NOW_SHOWING_MOVIE_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_NOW_SHOWING_MOVIES_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          movies: action.payload,
        }
      }
    }

    return state
}
