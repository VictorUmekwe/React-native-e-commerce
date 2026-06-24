import app from "./app.js";
import { getEnv } from "./utils/env.js";
import http from "http";
import connectDB from "./config/ db.js";
import path from 'path'
import express, { type Request, type Response } from 'express'


const env = getEnv();
const server = http.createServer(app)

const __dirname = path.resolve()


connectDB()
  .then(() => {

    // make the app ready for production
     
    if(env.NODE_ENV === 'production'){
      app.use(express.static(path.join(__dirname,"../admin/dist")))

      app.get("/{*any}",(req:Request, res:Response) => {
        res.sendFile(path.join(__dirname, "../admin", "dist", "index.html"))
    })
    }

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