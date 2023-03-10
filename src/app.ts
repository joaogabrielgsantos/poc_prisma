import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import bookRouter from "./routers/books.router.js";

dotenv.config();


const app = express();
app
	.use(express.json())
	.use(cors())
	.get("/status", (req, res) => res.send("OK!"))
	.use(bookRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));


export default app;