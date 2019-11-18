import fetch from 'isomorphic-unfetch';
import {Method, ErrorResult, basicRequest} from './request'; 
import {AuthData} from '../utils/models';

// const AUTH_URL = 'https://the-project-api.herokuapp.com/auth';
const Auth_URL = 'http://localhost:8080/auth';

export async function basic(username: string, password:string): Promise<AuthData> 
 {
  const req = basicRequest(Method.GET, null, {username, password});
  const res = await fetch(Auth_URL+'/basic', req);
  const json = await res.json();
  if (!res.ok) {
    console.warn(`Auth failed. Message: ${json.message}`);
    throw {status: res.status, message: json.message};
  }
  console.log(`Auth successful. ID: ${json.user.id}`);
  return json;
}