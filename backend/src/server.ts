import app from "./app.js";
import { getEnv } from "./utils/env.js";
import http from "http";
import connectDB from "./config/ db.js";

const env = getEnv();
const server = http.createServer(app)


connectDB()
  .then(() => {
    server.listen(env.PORT, () => {
      console.log(
        `🚀 Server running in ${env.NODE_ENV} mode on port ${env.PORT}`
      );
    });
  })
  .catch((error) => {
    console.error(`❌ Error: ${error}`);
    process.exit(1);
  });


// handle process termination

const exitHandler = () => {
    if(server.listening) {
        console.log('Shutting down server...')
    }
    server.close(() => {
        console.log('Server closed')
    })
    process.exit(0)
}

process.on('SIGTERM', exitHandler)
process.on('SIGINT', exitHandler)