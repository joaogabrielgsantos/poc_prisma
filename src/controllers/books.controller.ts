import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { Book, BookEntity } from "../protocols/books.js";
import { getBooks, insertBook, reviseBook } from "../repositories/books.repository.js";



async function postBook(req: Request, res: Response) {
    const newBook = req.body as Book
    try {
        const resultado = await insertBook(newBook)
        return res.status(StatusCodes.CREATED).send(`Book inserted ${resultado}`);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


async function listBooks(req: Request, res: Response) {
    const resultado = await getBooks();
    return res.send(resultado)
}


async function updateBook(req: Request, res: Response) {
    const renewBook = req.body as BookEntity
    try {
        const resultado = await reviseBook(renewBook)
        return res.status(StatusCodes.OK).send(`Book updated ${resultado}`);

    } catch (error) {
        console.error(error);
        return res.sendStatus(StatusCodes.INTERNAL_SERVER_ERROR);
    }
}


export { postBook, listBooks, updateBook}