import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import { connectDB } from './config/db.js';
import accountRouter from './routes/accountRoutes.js';
import cookieParser from 'cookie-parser';


const app = express();
const port = process.env.PORT || 3000;
connectDB()

const allowedOrigins = ['http://localhost:5173']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin:allowedOrigins,credentials:true}))


app.get('/', (req,res) => {
    res.send('API WORKING')
})

app.use('/api/accounts', accountRouter);

app.listen(port, () => {
    console.log(`Server started on PORT: http://localhost:${port}`)
});