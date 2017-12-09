export function movieDetails(
  state = {
    details: [],
    cast: [],
    trailer: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_MOVIE_DETAILS": {
      return { ...state, fetching: true };
    }
    case "FETCH_MOVIE_DETAILS_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_MOVIE_DETAILS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        details: action.payload
      };
    }

    case "FETCH_CAST_FULFILLED": {
      return {
        ...state,
        cast: action.payload
      };
    }

    case "FETCH_MOVIE_TRAILER_FULFILLED": {
      return {
        ...state,
        trailer: action.payload
      };
    }
  }

  return state;
}
