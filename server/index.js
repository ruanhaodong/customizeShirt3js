import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import dalleRouter from './routers/dalle.routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));


app.use('/api/v1/dalle', dalleRouter);
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})



app.listen(process.env.PORT || 8080, () => {
    console.log('Server listening on port 8080');
})