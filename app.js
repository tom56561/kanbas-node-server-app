import express from 'express';
import Hello from './hello.js';
import Lab5 from './Lab5.js';
import CourseRoutes from './courses/routes.js';
import ModuleRoutes from './modules/routes.js';
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
ModuleRoutes(app);
Hello(app);
Lab5(app)
CourseRoutes(app)
app.listen(4000);