import 'dotenv/config'
export const getEnv = () => {
    const env = {
        MONGO_URI: process.env.MONGO_URI!,
        PORT: process.env.PORT!,
        NODE_ENV: process.env.NODE_ENV!
    }
    return env
}