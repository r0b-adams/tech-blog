import { Router } from 'express';
import authRoutes from './auth-routes';
import postRoutes from './post-routes';
import commentRoutes from './comment-routes';

const router = Router();

router.use('/auth', authRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

export default router;
