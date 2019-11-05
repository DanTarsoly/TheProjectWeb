import fetch from 'isomorphic-unfetch';

const PLACES_URL = 'https://the-project-api.herokuapp.com/places';

export async function getAsync(id:string): Promise<Place> {
  const res = await fetch(`${PLACES_URL}/${id}`);
  if (!res.ok) throw res;
  const json = await res.json();
  console.log(`Place data fetched.`);
  return json;
}

export async function getAllAsync(): Promise<Place[]> {
  const res = await fetch(PLACES_URL);
  if (!res.ok) throw res;
  const json = await res.json();
  console.log(`Places data fetched. Count: ${json.length}`);
  return json;
}