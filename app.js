import express from 'express';
import Hello from './hello.js';
const app = express()
Hello(app)
app.listen(4000)