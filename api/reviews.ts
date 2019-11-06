import fetch from 'isomorphic-unfetch';
import {Review} from '../utils/models';

const REVIEWS_URL = 'https://the-project-api.herokuapp.com/reviews';

export async function read(id: string): Promise<Review> {
  const res = await fetch(`${REVIEWS_URL}/${id}`);
  if (!res.ok) throw res;
  const json = await res.json();
  console.log(`Review fetched. ID: ${json.id}`);
  return json;
}

export async function readMany(place?: string, user?: string): Promise<Review[]> {
  const params: any = {};
  if (place) params.place = place;
  if (user) params.user = user;
  let url: string;
  if (params) {
    const searchSring = new URLSearchParams(params).toString();
    url = `${REVIEWS_URL}?${searchSring}`;
  } else {
    url = REVIEWS_URL;
  }
  const res = await fetch(url);
  if (!res.ok) throw res;
  const json = await res.json();
  console.log(`Places fetched. Count: ${json.length}`);
  return json;
}