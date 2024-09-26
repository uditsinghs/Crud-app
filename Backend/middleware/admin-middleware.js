export const adminMiddleware = async (req, res, next) => {
  try {
    const adminRole = req.user.isAdmin;
    if (!adminRole) {
      return res.status(403).json({ message: "only admin acccess this route" });
    }
    next();
  } catch (error) {}
};
