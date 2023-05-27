import jwt from "jsonwebtoken";

export const sendCookie = (res, user, message,statusCode=201) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 15,
      sameSite:process.env.NODE_ENV==='Developement'?"lax":"none",
      secure:process.env.NODE_ENV==='Developement'?false:true
    })
    .json({ success: true, message });
};
