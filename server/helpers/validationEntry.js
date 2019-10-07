import joi from '@hapi/joi';

const validate = {
    validation(schema){
        const entryValidation = joi.object({
            title : joi.string().trim().required(),
            detail : joi.string().trim().required(),
        });
        return entryValidation.validate(schema);
    },
};
export default validate;