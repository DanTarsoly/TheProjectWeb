type Place = {
  id: string;
  name: string;
  address: Address
  tags: string[]
}

type Address = {
  street: string,
  post: string,
  city: string
}

const place: Place = {
  id: '1',
  name: 'asd',
  address: {
    street: 'asd',
    post: 'asd',
    city: 'asd'
  },
  tags: ['asd']
}