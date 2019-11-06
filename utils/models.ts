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
  user: {
    id: string,
    name: string
  },
  place: string,
  rating: number,
  comment: string,
  createdAt: Date
}