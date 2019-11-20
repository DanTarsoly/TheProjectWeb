import fetch from 'isomorphic-unfetch';
import {Method, bearerRequest} from '../api/request';
import {Review, NewReview} from '../utils/models';

// const PLACES_URL = 'https://the-project-api.herokuapp.com/reviews';
const REVIEWS_URL = 'http://localhost:8080/reviews';

export async function create(place: NewReview, token:string): Promise<Review> {
  const req = bearerRequest(token, Method.POST, place);
  const res = await fetch(REVIEWS_URL, req);
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Adding review failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
  console.log(`Review added. ID: ${json.id}`);
  return json;
}

export async function read(id: string): Promise<Review> {
  const res = await fetch(`${REVIEWS_URL}/${id}`);
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Fetching review failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
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
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Fetching reviews failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
  console.log(`Reviews fetched. Count: ${json.length}`);
  return json;
}