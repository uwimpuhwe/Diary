import joi from '@hapi/joi';
const validatesignup = {
   validation(signup){
       const login = joi.object({
         first_name: joi.string().trim().required(),
         second_name: joi.string().trim().required(),
         email: joi.string().trim().required(),
           username: joi.string().trim().required(),
           password: joi.string().trim().required(),
           confirm_password: joi.string().trim().required(),
       });
       return login.validate(signup);
   },
};
export default validatesignup;