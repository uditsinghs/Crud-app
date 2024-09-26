import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

// Secure the password with bcrypt
userSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  try {
    const hashpassword = await bcryptjs.hash(user.password, 10);
    user.password = hashpassword;
    next();
  } catch (error) {
    next(error);
  }
});
// campare password........
userSchema.methods.camparePassword = async function (password) {
  return bcryptjs.compare(password, this.password);
};

// JSON Web Token
userSchema.methods.generateToken = async function () {
  try {
    return jsonwebtoken.sign(
      {
        userId: this._id.toString(),
        email: this.email,
        isAdmin: this.isAdmin,
      },
      process.env.JWT_SECRET_KEY, // Fixed typo
      {
        expiresIn: "30d",
      }
    );
  } catch (error) {
    console.error(error);
    throw new Error("Token generation failed"); // Added error handling
  }
};

const User = mongoose.model("User", userSchema);

export default User;
