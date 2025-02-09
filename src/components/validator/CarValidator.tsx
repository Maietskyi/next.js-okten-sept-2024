import Joi from "joi";

export const carValidator = Joi.object({
    brand: Joi.string()
        .pattern(new RegExp("^[a-zA-Zа-яА-ЯёЁіІїЇєЄҐґ]{1,20}$"))
        .required()
        .messages({ "string.pattern.base": "Your brand value didn't match pattern" }),
    price: Joi.number().min(0).max(1000000).required().messages({
        "number.min": "Min price is 0",
        "number.max": "Max price is 1 000 000",
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        "number.min": "Min year is 1990",
        "number.max": "Max year is 2024",
    }),
});