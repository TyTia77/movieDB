export function tvDetails(
    state = {
        popular: [],
        toprated: [],
        latest: [],
        fetching: false,
        fetched: false,
        error: null
    },
    action
) {
    switch (action.type) {
        case "fetchTvPopular_FULFILLED": {
            return {
                ...state,
                popular: action.payload
            };
        }

        case "fetchTvToprated_FULFILLED": {
            return {
                ...state,
                toprated: action.payload
            };
        }

        case "fetchTvLatest_FULFILLED": {
            return {
                ...state,
                latest: action.payload
            };
        }

        default:
            console.log('logging uncaught actions', action.type);

    }

    return state;
}
