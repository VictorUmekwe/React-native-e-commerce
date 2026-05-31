import express, {type Express, type NextFunction, type Request, type Response} from 'express';
import cors from 'cors';
import helmet from 'helmet'
import { limiter } from './utils/rateLimit.js';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorMiddleware.js';

const app: Express = express();

//security middlewares
app.use(helmet());
app.use(cors());

//rate limiting
app.use('/api', limiter)

//built in body parser
app.use(express.json({limit: '10kb'}));
app.use(express.urlencoded({extended: true, limit: '10kb'}));


//root route
app.get('/', (req: Request, res: Response) => {
    res.send('ShopSpree API is running');
})

//API Routes
app.use('/api/v1', routes)

//Error handling
app.use((err: Error, req:Request, res: Response, next:NextFunction) => {
    errorHandler(err, req, res, next)
})

export default app;