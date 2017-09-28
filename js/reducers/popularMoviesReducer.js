export default function reducer(state={
    movies: [],
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_POP_MOVIE": {
        return {...state, fetching: true}
      }
      case "FETCH_POP_MOVIE_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_POP_MOVIES_FULFILLED": {
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
