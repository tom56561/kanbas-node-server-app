import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import AssignmentRoutes from './assignments/routes.js';
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose"
import UserRoutes from "./users/routes.js";

mongoose.connect("mongodb://127.0.0.1:27017/kanbas");
const app = express();
UserRoutes(app);
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);
Hello(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);