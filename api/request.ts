export enum Method{
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export enum HeaderKey{
  ContentType = 'Content-Type',
  Authorization = 'Authorization',
}

export enum HeaderValue{
  Json = 'application/json;charset=utf-8',
  Basic = 'Basic ',
  Bearer = 'Bearer '
}

export type Credentials = {
  username: string,
  password: string
}

export const request = (
  method: Method = Method.GET, 
  body:any = undefined): RequestInit => {

const headers = new Headers();
const request: RequestInit = {
  method: method,
  headers: headers
};
if (body) {
  headers.set(HeaderKey.ContentType, HeaderValue.Json);
  request.body= JSON.stringify(body);
}
return request;
}

export const basicRequest = (
    username: string,
    password: string,
    method: Method = Method.GET, 
    body:any = undefined): RequestInit => {
  
  const headers = new Headers();
  headers.set(HeaderKey.Authorization,
      HeaderValue.Basic + btoa(username + ":" + password));
  const request: RequestInit = {
    method: method,
    headers: headers
  };
  if (body) {
    headers.set(HeaderKey.ContentType, HeaderValue.Json);
    request.body= JSON.stringify(body);
  }
  return request;
}

export const bearerRequest = (
  token: string,
  method: Method = Method.GET, 
  body:any = undefined): RequestInit => {

const headers = new Headers();
headers.set(HeaderKey.Authorization,
  HeaderValue.Bearer + token);
const request: RequestInit = {
  method: method,
  headers: headers
};
if (body) {
  headers.set(HeaderKey.ContentType, HeaderValue.Json);
  request.body= JSON.stringify(body);
}
return request;
}