import { Router } from 'express';
import { followUser, unfollowUser } from '../controllers/follow.controller.js';
import { verifyJWT } from '../middlewares/auth.middleware.js';

const router = Router();

router.post('/follow/:userId', verifyJWT, followUser);
router.delete('/unfollow/:userId', verifyJWT, unfollowUser);

export default router;
