import Joi from "joi";
import { BookEntity } from "../protocols/books.js";



const bookSchema = Joi.object<BookEntity>({
    id:
        Joi
            .number(),
    title:
        Joi
            .string()
            .min(1)
            .required(),
    isbn:
        Joi
            .string()
            .min(13)
            .required(),
    authorId:
        Joi
            .array().items(Joi.number())
            .required(),
    categoryId:
        Joi
            .number()
            .required(),
    genreId:
        Joi
            .array().items(Joi.number())
            .required(),
    yearId:
        Joi
            .number()
            .required(),
    countryId:
        Joi
            .number()
            .required()
});

export { bookSchema };