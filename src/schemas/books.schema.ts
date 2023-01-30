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
    author:
        Joi
            .array().items(Joi.number())
            .required(),
    category:
        Joi
            .number()
            .required(),
    genre:
        Joi
            .array().items(Joi.number())
            .required(),
    year:
        Joi
            .number()
            .required(),
    country:
        Joi
            .number()
            .required()
});

export { bookSchema };