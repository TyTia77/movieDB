import { environment_dev } from "./store";

// if in dev/live environment
const base_url = environment_dev
  ? "http://api.themoviedb.org/3"
  : "https://cors-anywhere.herokuapp.com/http://api.themoviedb.org/3";

const info = {
  api_key: "?api_key=0aeb56f883f453e1f523338db440eb9e",
  base_url: base_url,
  images_url: "http://image.tmdb.org/t/p",
  timeout: 5000
};

export function getInfo() {
  return info;
}
