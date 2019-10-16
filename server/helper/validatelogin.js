import joi from '@hapi/joi';
const validatesignin = {
   validation(signin){
       const login = joi.object({
           email: joi.string().trim().required(),
           password: joi.string().trim().required(),
       });
       return login.validate(signin);
   },
};

// const validate = {
//     validation(schema){
//         const entryValidation = joi.object({
//             title : joi.string().trim().required(),
//             detail : joi.string().trim().required(),
//         });
//         return entryValidation.validate(schema);
//     },
// };
export default validatesignin;