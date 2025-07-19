import express from 'express';
import { createClient } from 'redis';

const app = express();
app.use(express.json());

const client = createClient();
client.connect();

app.post('/submit', async (req, res) => {
    const { problemId, code, userId, lang } = req.body;
    // ideally push this code into db prisma.submissoins.create({})
    await client.lPush("submissions", JSON.stringify({problemId, code, userId, lang}));
    res.json({ status: 'success', message: 'Submission received' });

})

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});