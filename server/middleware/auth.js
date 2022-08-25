import jwt from 'jsonwebtoken'
import UserModal from '../models/user.js'

const secret = "test";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    console.log({token})
    const isCustomAuth = token.length < 500;
    let decodedData;
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData?.id
      console.log(decodedData)
    }
    // else if for who login by google login
    // else {
    //   decodedData = jwt.decode(token);
    //   const googleId = decodedData?.sub.toString();
    //   const user = await UserModal.findOne({googleId});
    //   req.userId = user?._id;
    // }
    next()
  } catch (err) {
    console.log(err)
  }
}

export default auth;