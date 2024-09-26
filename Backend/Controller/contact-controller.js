import Contact from "../models/contact-model.js";
const contactForm = async (req, res, next) => {
try {
  const response = req.body;
  await Contact.create(response)
  res.status(201).json({msg:"messgae send successfully"})

} catch (error) {
  res.status(500).json({msg:"message not delivered"})
}

};
export default contactForm;
