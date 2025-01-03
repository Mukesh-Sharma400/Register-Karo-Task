import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import companyRoutes from './routes/companyRoutes';

const port = 5000;
const app = express();

app.use(cors({
    origin: 'http://localhost:3000',
}));

app.use(bodyParser.json());
app.use('/api', companyRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});