export type BookEntity = {
    id?: number,
    title: string,
    isbn: string,
    authorId: number[],
    genreId: number[],
    categoryId: number,
    yearId: number,
    countryId: number

}

export type Book = Omit<BookEntity, "id">

export type AuthorEntity = {
    id?: number,
    author: string
}

export type BookDB = {
    title: string,
    isbn: string,
    categoryId: number,
    yearId: number,
    countryId: number
}

