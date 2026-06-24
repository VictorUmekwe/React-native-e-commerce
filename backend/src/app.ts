import cors from "cors";
import express from "express";
import helmet from "helmet";
import routes from "./routes/index.js";
import { limiter } from "./utils/rateLimit.js";
import type { NextFunction, Request, Response } from "express";
import { errorHandler } from "./middleware/errorMiddleware.js";
import { clerkMiddleware } from "@clerk/express";

const app = express();

// Security middleware
app.use(cors());
app.use(helmet());


// Rate limiting middleware
app.use(limiter);


// Request body parsing
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: true, limit: "10kb" }));

//clerk middleware
app.use(clerkMiddleware());

//root route
app.get('/', (req: Request, res: Response) => {
    res.send('ShopSpree API is running');
})

// Routes
app.use("/api/v1", routes);

//errorHandler
app.use((err:Error, req:Request, res:Response, next:NextFunction) => {
    errorHandler(err, req, res, next)
})

export default app;