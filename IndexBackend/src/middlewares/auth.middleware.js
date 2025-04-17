import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';
import { User } from '../models/user.model.js';

export const verifyJWT = async (req, res, next) => {
    const token = req.cookies.accessToken || req.headers.authorization?.split(' ')[1];

    if (!token) {
        console.log('No token provided');
        return next(new ApiError(401, 'Unauthorized'));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded._id).select('-password');
        if (!req.user) {
            console.log('User not found for ID:', decoded._id);
            return next(new ApiError(401, 'Unauthorized'));
        }
        next();
    } catch (error) {
        console.log('Token verification failed:', error.message);
        return next(new ApiError(401, 'Unauthorized'));
    }
};
