import express from 'express';
import globalRoutes from './routes/globalRoutes';
import connectDB from './config/db';
import path from 'path';
import cors from 'cors';

import 'dotenv/config';

connectDB();

const server = express();
server.use(express.json());
server.use(cors());

server.use(globalRoutes);
server.use('/files', express.static(path.resolve(__dirname, '..', 'tmp', 'uploads') ))
//server.use('qrcode', express.static(path.resolve(__dirname, '..', 'tmp', 'qrcodes') ))
server.use('qr', express.static(path.resolve(__dirname, '..', 'tmp', 'qrcode') ))

server.listen(process.env.PORT);