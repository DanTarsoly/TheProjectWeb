import fetch from 'isomorphic-unfetch';
import {AuthData, NewUser} from '../utils/models';
import {Method, request, basicRequest} from './request'; 

const AUTH_URL = 'https://the-project-api.herokuapp.com/auth';
// const AUTH_URL = 'http://localhost:8080/auth';

export async function basic(username: string, password:string): Promise<AuthData> {
  const req = basicRequest(username, password);
  const res = await fetch(AUTH_URL+'/basic', req);
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Authentication failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
  console.log(`Authentication successful. ID: ${json.user.id}`);
  return json;
}

export async function register(regData: NewUser): Promise<AuthData> {
  const req = request(Method.POST, regData);
  const res = await fetch(AUTH_URL+'/register', req);
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Registration failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
  console.log(`User registered. ID: ${json.user.id}`);
  return json;
}