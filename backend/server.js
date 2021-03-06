import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import colors from 'colors';
import {notFound, errorHandler } from './middleware/errorMiddleware.js'

import propertyRoutes from './routes/propertyRoutes.js'

dotenv.config();

connectDB();

const app = express();

app.use(notFound)

app.use(errorHandler)

app.get('/', (req,res) => {
    res.send('API is running...')
})

app.use('/api/properties', propertyRoutes)

const PORT = process.env.PORT || 5000


app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} on port ${5000}`.yellow.bold))