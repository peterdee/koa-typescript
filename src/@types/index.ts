export interface Database {
  database: string,
  host: string,
  logging: boolean,
  migrations: boolean,
  password: string,
  port: number,
  seeding: boolean,
  username: string,
}

export interface UserData {
  email: string,
  firstName: string,
  lastName: string,
  password: string,
}
