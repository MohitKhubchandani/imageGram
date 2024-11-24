import express from 'express';
import connectDB from './src/config/dbConfig.js';
import apiRouter from './src/routes/apiRouter.js'
import multer from 'multer';
import { isAuthenticated } from './src/middleware/authMiddleware.js';
import swaggerJSDoc from 'swagger-jsdoc'; 
import swaggerUi from 'swagger-ui-express'
import { options } from './src/utils/swaggerOptions.js';

const swaggerDocs = swaggerJSDoc(options);
 
const app = express();
app.use(express.json());
app.use(express.urlencoded());
const PORT = process.env.PORT || 5000;

const upload = multer();

connectDB();



// Route
app.use("/api", apiRouter);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use(upload.single());

app.get("/ping" , isAuthenticated, (req, res) => {
  console.log(req.query);
  console.log(req.body);
  console.log(req.user);
  return res.json({message: "Pong"})
})
// Start server
app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
