import Joi from "joi";

const registerSchema = Joi.object({
  firstName: Joi.string().trim().required().messages({
    'string.empty': 'First name is required'
  }),
  lastName: Joi.string().trim().required().messages({
    'string.empty': 'Last name is required'
  }),
  emailorMobile: Joi.alternatives([
    Joi.string().email({tlds:false}),
    Joi.string().pattern(/^[0-9]{10}$/)
  ]).messages({
    'alternatives.match': 'Invalid email address or mobile number'
  }),
  password: Joi.string()
  .pattern(/^[a-zA-Z0-9]{6,30}$/)
  .trim()
  .required()
  .messages({
    'string.empty': 'Password is required',
    'string.pattern.base':'password must be at 6 characters'
  }),
  confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
    'any.only': 'Password and confirm did not match',
    'string.empty' : 'Confirm password is required'
  })
});

const validateRegister = input => {
    const {error} = registerSchema.validate(input,{abortEarly:false})
    if (error) {
    return error.details.reduce((acc,el) => {
acc[el.path[0]] = el.message
return acc;
    },{});
}
}

export default validateRegister

