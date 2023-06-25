type User = { 
  "id": string,
  "name": string,
"username": string,
"email": string,
"address": {
  "street": string,
  "suite": string,
  "city": string,
  "zipcode": string,
  "geo": {
    "lat": string,
    "lng": string
  }
},
"phone": string,
"website": string
"company": {
  "name": string,
  "catchPhrase": string,
  "bs": string
}
}

type Post = {
  "userId": number,
  "id": string,
  "title": string
  "body": string
}