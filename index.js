import express from 'express';
import connectDB from './src/config/dbConfig.js';
import apiRouter from './src/routes/apiRouter.js'
import multer from 'multer';

const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = process.env.PORT || 5000;

const upload = multer();

connectDB();



// Route
app.use("/api", apiRouter);
app.use(upload.single());


// Start server
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
