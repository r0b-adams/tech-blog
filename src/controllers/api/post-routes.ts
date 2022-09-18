import { Router } from 'express';

const router = Router();

router.get('*', (req, res) => {
  res.status(200).json({ message: 'POST ROUTES HERE' });
});

export default router;
