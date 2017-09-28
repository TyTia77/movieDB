export default function reducer(state={
    movies: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_NEW_MOVIE": {
        return {...state, fetching: true}
      }
      case "FETCH_NEW_MOVIE_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_NEW_MOVIES_FULFILLED": {
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
