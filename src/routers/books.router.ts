import {  Router } from "express";
import  { listBooks, postBook } from "../controllers/books.controller.js";
import { validateBook } from "../middlewares/books.middleware.js";



const bookRouter = Router();

bookRouter.post("/books", validateBook, postBook);
bookRouter.get("/books", listBooks);



export default bookRouter;