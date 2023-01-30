import { func } from "joi";
import prisma from "../database/database.js";
import { Book, BookEntity } from "../protocols/books.js";


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

async function reviseBook(book: BookEntity) {
    const upBook = await prisma.books.update({
        where: {
            id: book.id
        },
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
                deleteMany: {},
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
                deleteMany: {},
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
    return upBook
}

async function excludeBook(id: number) {
    async function delAuthorsBooks() {
        await prisma.authorsbooks.deleteMany({
            where: {
                bookId: id
            }
        });

    }
    async function delGenresBooks() {
        await prisma.genresbooks.deleteMany({
            where: {
                bookId: id
            }
        });

    }
    async function delBooks() {
        await prisma.books.delete({
            where: {
                id: id
            }
        });

    }

    return delAuthorsBooks(), delGenresBooks(), delBooks()
}



export { insertBook, getBooks, reviseBook, excludeBook }