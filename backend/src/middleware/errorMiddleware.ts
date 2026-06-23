import type {Request, Response,  NextFunction} from 'express'

export const errorHandler = (err:Error, req:Request, res:Response, next: NextFunction) => {
     console.log(err.stack)

      res.status(500).json({
        status: "error",
        message: err.message || "Internal server error",
        ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
      });
}