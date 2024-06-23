import express, { Router } from 'express';

const router: Router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ message: 'Welcome to the API' });
});

export { router as indexRouter };