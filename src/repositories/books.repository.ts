import prisma from "../database/database.js";
import { Book } from "../protocols/books.js";


async function insertBook(book: Book) {

    const newBook = await prisma.books.create({
        data: {
            title: book.title,
            isbn: book.isbn,
            countries: {
                connect: {
                    id: book.countryId
                }
            },
            categories: {
                connect: {
                    id: book.categoryId
                }
            },
            years: {
                connect: {
                    id: book.yearId
                }
            },
            authorsbooks: {
                create: book.authorId.map(item => (
                    {
                        authors: {
                            connect: {
                                id: item
                            }
                        }
                    }
                ))

            },
            genresbooks: {
                create: book.genreId.map(item => (
                    {
                        genres: {
                            connect: {
                                id: item
                            }
                        }
                    }
                ))

            }

        }
    })
    return newBook


}

async function getBooks() {
    return await prisma.books.findMany({
        include: {
            genresbooks: true,
            authorsbooks: true
        }
    })
}


export { insertBook, getBooks }