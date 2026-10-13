
import { Router } from 'express';

const router = Router();

router.get('/test', (req, res) => {
  res.status(200).json({
    message: 'API funcionando!',
  });
});

export { router };
