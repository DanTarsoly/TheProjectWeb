import fetch from 'isomorphic-unfetch';
import {Place} from '../utils/models';

const PLACES_URL = 'https://the-project-api.herokuapp.com/places';

export async function read(id: string): Promise<Place> {
  const res = await fetch(`${PLACES_URL}/${id}`);
  if (!res.ok) throw res;
  const json = await res.json();
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
  if (!res.ok) throw res;
  const json = await res.json();
  console.log(`Places fetched. Count: ${json.length}`);
  return json;
}