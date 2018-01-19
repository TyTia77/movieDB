export function actorDetails(
  state = {
    actorDetails: [],
    actors: [],
    fetching: false,
    fetched: false,
    error: null
  },
  action
) {
  switch (action.type) {
    case "FETCH_ACTOR_DETAILS": {
      return { ...state, fetching: true };
    }
    case "FETCH_ACTOR_DETAILS_REJECTED": {
      return { ...state, fetching: false, error: action.payload };
    }
    case "FETCH_ACTOR_DETAILS_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        actorDetails: action.payload
      };
    }
    case "FETCH_POPULAR_ACTORS_FULFILLED":{
      return {
        ...state,
        actors: action.payload
      };
    }

    default:
      console.log('logging uncaught actions', action.type);

  }

  return state;
}
