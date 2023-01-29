import express from "express";
import cors from "cors";


const app = express();
app
	.use(express.json())
	.use(cors())
	.get("/status", (req, res) => res.send("Ok!"))

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));


export default app;