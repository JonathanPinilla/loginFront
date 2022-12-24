export interface user {
  "id": string,
  "name": string,
  "lName": string,
  "uName": string
  "email": string,
  "password": string,
  "role": ROLE,
  "creationDate": string,
  "loginDate": string,
  "active": boolean
}

enum ROLE {
  USER = "USER",
  ADMIN = "ADMIN",
  OWNER = "OWNER"
}
