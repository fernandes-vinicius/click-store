declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string

    NEXTAUTH_URL: string
    NEXTAUTH_SECRET: string

    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string

    NEXT_PUBLIC_STRIPE_PUBLIC_KEY: string
    STRIPE_SECRET_KEY: string
    STRIPE_WEBHOOK_SECRET_KEY: string

    HOST_URL: string
  }
}
