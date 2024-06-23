import express, { Router } from 'express';
import shortenUrl from "../config/bitly";

interface MyCustomError extends Error {
    statusCode: number;
    message: string;
}

const router: Router = express.Router();

router.post('/shorten', async (req, res) => {
    const { longUrl } = req.body;
    if (!longUrl) {
        return res.status(400).json({ error: 'No URL provided' });
    }

    try {
        const shortUrl = await shortenUrl(longUrl); // Example service usage
        res.status(200).json({ shortUrl });
    } catch (error: unknown) {
        if (error instanceof Error) {
            const errorCustom = error as MyCustomError;
            res.status(errorCustom.statusCode).json({error: errorCustom.message});
        }
        res.status(500).json({ error: 'Global error' });
    }
});

export { router as bitlyRouter };
