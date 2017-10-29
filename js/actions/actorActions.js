import axios from "axios"
import { getInfo } from "./api"

let info = getInfo();

//https://api.themoviedb.org/3/person/1333?api_key=0aeb56f883f453e1f523338db440eb9e&language=en-US

export function fetchActorDetails(id) {
  let api = `${info.base_url}/person/${id}${info.api_key}&language=en-US`;
  return {type: "FETCH_ACTOR_DETAILS", payload: axios.get(api)}
}
