import prisma from "../database/database.js";
import { Book } from "../protocols/books.js";


async function insertBook(book: Book) {
  
}

async function getBooks(){
    return prisma.books.findMany({
        include: {
            genresbooks: true,
            authorsbooks: true
        }
    })
}


export { insertBook, getBooks }
