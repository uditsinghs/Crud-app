import jsonwebtoken from "jsonwebtoken";
import User from "../models/user-model.js";

const authMiddleware = async (req, res, next) => {
  const token = req.header("Authorization");
  
  if (!token) {
    return res.status(401).json({ message: "Unauthorized user, token not provided" });
  }
  
  const jwtToken = token.replace("Bearer ", "").trim();
  
  try {
    const decodedToken = jsonwebtoken.verify(jwtToken, process.env.JWT_SECRET_KEY);
    const userData = await User.findOne({ email: decodedToken.email }).select("-password");
    
    if (!userData) {
      return res.status(401).json({ message: "Unauthorized user, user not found" });
    }

    req.user = userData;
    req.token = jwtToken;
    req.userId = userData._id;

    next();
  } catch (error) {
    console.error("Authorization error:", error);
    res.status(401).json({ message: "Unauthorized user" });
  }
};

export default authMiddleware;
