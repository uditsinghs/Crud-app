import User from "../models/user-model.js";
export const signUp = async (req, res, next) => {
  try {
    const { username, email, phone, password } = req.body;

    // Check if the email is already registered
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    const userCreated = await User.create({
      username,
      email,
      phone,
      password,
    });

    // Generate token and send response
    res.status(201).json({
      message: "User created successfully",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    console.error("ERROR:", error.message);
    // res.status(500).json({ message: "Something went wrong" });
    next(error);
  }
};

// Login

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    const userExist = await User.findOne({ email });
    if (!userExist) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const user = await userExist.camparePassword(password);

    // Generate token and send response
    if (user) {
      res.status(200).json({
        message: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    }
  } catch (error) {
    console.error("ERROR:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};

//  get user data
export const userDetail = async (req, res) => {
  try {
    const userData = req.user;
    return res.status(200).json({ userData });
  } catch (error) {
    res.status(500).json({ message: "something went wrong" });
  }
};
