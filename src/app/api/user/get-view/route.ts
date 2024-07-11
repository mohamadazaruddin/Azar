import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/services/db";
import { userInfoModel } from "../../../services/model/userInfo";
export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await userInfoModel.find();
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json(data);
}
