export type User = {
  id: string,
  name: string
}

export type Place = {
  id: string;
  name: string;
  address: Address
  tags: string[]
}

export type Address = {
  street: string,
  post: string,
  city: string
}

export type Review = {
  id: string,
  user: User,
  place: string,
  rating: number,
  comment: string,
  createdAt: Date
}

export type AuthData = {
  user: User,
  token: string
}