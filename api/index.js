import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import { fileURLToPath } from "url";
import { connectToDB } from "./src/config/db.js";
import testrouter from "./src/routes/testRoute.js";
import userRouter from "./src/routes/userRouter.js";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const port = process.env.PORT || 3000;



// Middleware setup
app.use(cors());
app.use(express.json());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

// Routes
app.use("/test", testrouter);
app.use("/user", userRouter);

// Start server and connect to database
app.listen(port, "0.0.0.0", async () => {
  try {
    await connectToDB();
    console.log(`Server is running on http://localhost:${port}`);
  } catch (e) {
    console.log("Error in database connection", e);
  }
});
