import { Router } from 'express';
import type { Request, Response } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
    return res.json({ message: 'Test route working' });
});

export default router;