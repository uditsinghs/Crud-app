import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import userRoute from "./Routes/user.route.js";
import contactRoute from "./Routes/contact-route.js";
import adminData from './Routes/admin-route.js'
import connectDB from "./utilis/db.js";
import { errorMiddleware } from "./middleware/error-middleware.js";
dotenv.config();

const app = express();

// Set the middleware
app.use(express.json());
app.use(errorMiddleware);
app.use(cors()); // Corrected this line

// Get the environment variables to use
const PORT = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();
// routes.....
app.use("/user", userRoute);
app.use("/api/form", contactRoute);
app.use('/api/admin/',adminData)


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
