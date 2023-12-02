import express from 'express';
import "dotenv/config";
import session from "express-session";
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import AssignmentRoutes from './assignments/routes.js';
import cors from "cors";
import "dotenv/config";
import mongoose from 'mongoose';
import UserRoutes from "./users/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL, // use different front end URL in dev and in production
    })
);
const sessionOptions = { // default session options
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}

app.use(
    session(sessionOptions)
);
Hello(app);
UserRoutes(app);
Lab5(app);
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
app.listen(process.env.PORT || 4000);