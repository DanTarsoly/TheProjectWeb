import fetch from 'isomorphic-unfetch';
import {Place, NewPlace} from '../utils/models';
import {Method, bearerRequest} from '../api/request';

// const PLACES_URL = 'https://the-project-api.herokuapp.com/places';
const PLACES_URL = 'http://localhost:8080/places';

export async function create(place: NewPlace, token:string): Promise<Place> {
  const req = bearerRequest(token, Method.POST, place);
  const res = await fetch(PLACES_URL, req);
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Adding place failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
  console.log(`Place added. ID: ${json.user.id}`);
  return json;
}

export async function read(id: string): Promise<Place> {
  const res = await fetch(`${PLACES_URL}/${id}`);
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Fetching place failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
  console.log(`Place fetched. ID: ${json.id}`);
  return json;
}

export async function readMany(query?: string): Promise<Place[]> {
  let url: string;
  if (query) {
    const searchSring = new URLSearchParams({q: query}).toString();
    url = `${PLACES_URL}?${searchSring}`;
  } else {
    url = PLACES_URL;
  }
  const res = await fetch(url);
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Fetching places failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
  console.log(`Places fetched. Count: ${json.length}`);
  return json;
}