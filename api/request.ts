import fetch from 'isomorphic-unfetch';
import { RequestOptions } from 'http';

export enum Method{
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

export type ErrorResult = {
  status: number,
  message: string
}

export type Credentials = {
  username: string,
  password: string
}

export const basicRequest = (
    method: Method = Method.GET, 
    body:any = null,
    credentials: Credentials|null = null): RequestInit => {
  
  const headers = new Headers();
  const request: RequestInit = {
    method: method,
    headers: headers
  };
  if (body) {
    headers.set('Content-Type', 'application/json;charset=utf-8');
    request.body= JSON.stringify(body);
  }
  if (credentials) {
    headers.set('Authorization', 'Basic ' + btoa(credentials.username + ":" + credentials.password));
  }
  return request;
}