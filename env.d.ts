declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string
    DATABASE_PASSWORD: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
  }
}
