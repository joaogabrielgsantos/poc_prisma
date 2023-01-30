import {  Router } from "express";
import  { listBooks, postBook, updateBook } from "../controllers/books.controller.js";
import { validateBook } from "../middlewares/books.middleware.js";



const bookRouter = Router();

bookRouter.post("/books", validateBook, postBook);
bookRouter.get("/books", listBooks);
bookRouter.put("/books", validateBook, updateBook);



export default bookRouter;