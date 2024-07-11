import mongoose from "mongoose";
const UserInfoModel = new mongoose.Schema({
  userAgent: String,
  screenSize: String,
  browserLanguage: String,
  browserPlatform: String,
});
export const userInfoModel =
  mongoose.models.userInfoModel || mongoose.model("userinfos", UserInfoModel);
