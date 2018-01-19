import axios from "axios"
import { getInfo } from "../../../../api"

let info = getInfo();
let test = '';
// popular
// https://api.themoviedb.org/3/tv/popular?api_key=0aeb56f883f453e1f523338db440eb9e&language=en-US&page=1


// top rated
// https://api.themoviedb.org/3/tv/top_rated?api_key=0aeb56f883f453e1f523338db440eb9e&language=en-US&page=1

// latest
// https://api.themoviedb.org/3/tv/latest?api_key=0aeb56f883f453e1f523338db440eb9e&language=en-US

export function fetchTvPopular() {
    test = 'popular';
    let api = `${info.base_url}/tv/${test}${info.api_key}&language=en-US&page=1`;

    console.log('pop', api);
    return { type: "fetchTvPopular", payload: axios.get(api) };
}

export function fetchTvToprated() {
    test = 'top_rated';
    let api = `${info.base_url}/tv/${test}${info.api_key}&language=en-US&page=1`;

    console.log('top', api);

    return {
        type: "fetchTvToprated",
        payload: axios.get(api)
    };
}

export function fetchTvLatest() {
    test = 'latest';
    let api = `${info.base_url}/tv/${test}${info.api_key}&language=en-US&page=1`;

    console.log('latest', api);

    return {
        type: "fetchTvLatest",
        payload: axios.get(api)
    };
}