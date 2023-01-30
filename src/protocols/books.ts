export type BookEntity = {
    id?: number,
    title: string,
    isbn: string,
    author: number[],
    genre: number[],
    category: number,
    year: number,
    country: number

}

export type Book = Omit<BookEntity, "id">

export type AuthorEntity = {
    id?: number,
    author: string
}



