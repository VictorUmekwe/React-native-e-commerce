import 'dotenv/config'
export const getEnv = () => {
    const env = {
        MONGO_URI: process.env.MONGO_URI!,
        PORT: process.env.PORT!,
        NODE_ENV: process.env.NODE_ENV!,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY!,
        CLERK_PUBLISHABLE_KEY: process.env.CLERK_PUBLISHABLE_KEY!,
        CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY!,
        CLOUDINARY_SECRET: process.env.CLOUDINARY_SECRET!,
        CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME!,
        INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY!
    }
    return env
}