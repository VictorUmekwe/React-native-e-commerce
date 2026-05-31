import 'dotenv/config';
import app from './app.js';
import http from 'http';
import { connectDB } from './config/db.js';


const PORT = process.env.PORT || 5000;

const httpServer = http.createServer(app);

//connect to database before starting the server
connectDB().then(() => {
    httpServer.listen(PORT, () => {
        console.log(`Server is running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`)
    })
})
