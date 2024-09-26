import User from "../models/user-model.js";
import Contact from "../models/contact-model.js";
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}, { password: 0 });
    if (!users || users.length === 0) {
      res.status(400).json({ Message: "users not found" });
    }
    return res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
};

export const getAllContactData = async (req, res, next) => {
  try {
    const contact = await Contact.find();
    if (!contact || contact.length === 0) {
      res.status(400).json({ Message: "Not any message yet" });
    }
    return res.status(200).json({ contact });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    next(error);
  }
};

export const getSingleUserData = async (req, res, next) => {
  try {
    const id = req.params.id;
    const singleUserData = await User.findOne({ _id: id },{password:0});
    return res.status(200).json({ singleUserData });
  } catch (error) {
    next(error);
  }
};



// update user data

export const updateUser = async (req,res,next)=>{
  try {
    const id = req.params.id;
    const updatedUserData = req.body;
    const updatedUser = await User.updateOne({_id:id},{$set:updatedUserData})
    res.status(200).json({message:"user updated successfully",updatedUser})
  } catch (error) {
    next(error)
  }

}