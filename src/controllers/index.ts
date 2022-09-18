import { Router } from 'express';
import apiRoutes from './api';
import viewRoutes from './view-routes';

const router = Router();

router.use(viewRoutes);
router.use('/api', apiRoutes);

export default router;
