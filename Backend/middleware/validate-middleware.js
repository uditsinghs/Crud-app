// import signupSchema from '../validator/user-validate.js';

const validate = (schema) => async (req, res, next) => {
  try {
    const parsedBody = await schema.parseAsync(req.body);
    req.body = parsedBody;
    next();
  } catch (err) {
    const errorDetails = {
      status: 422,
      message: err.errors[0].message,
      extraDetails: "Fill the form details properly",
    };
    console.error("Validation Error: ", errorDetails);
    res.status(422).json(errorDetails);
};

}
export default validate;
