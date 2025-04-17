import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import followRouter from './routes/follow.routes.js'; 
import likeRouter from './routes/like.routes.js';
import commentRouter from './routes/comment.routes.js'; 
import photoRouter from './routes/photo.routes.js'; 
import similarPhotosRouter from './routes/similarPhotos.routes.js'; // Import similar photos routes

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}));

app.use(express.json({ limit: '16kb' })); // Middleware to parse JSON data
app.use(express.urlencoded({ extended: true, limit: '16kb' })); // Middleware to parse URL-encoded data
app.use(express.static('public'));
app.use(cookieParser());

app.use('/api/v2/users', userRouter); // Use user routes with correct base path
app.use('/api/v2/follows', followRouter); // Use follow routes
app.use('/api/v2/likes', likeRouter); // Use like routes
app.use('/api/v2/comments', commentRouter); // Use comment routes
app.use('/api/v2/photos', photoRouter); // Use photo routes
app.use('/api/v2/similar-photos', similarPhotosRouter); // Use similar photos routes

export { app };