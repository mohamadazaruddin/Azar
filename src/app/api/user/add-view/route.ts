import { connectionStr } from "@/app/services/db";
import mongoose from "mongoose";
import { userInfoModel } from "../../../services/model/userInfo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  await mongoose.connect(connectionStr);
  const existingUser = await userInfoModel.findOne({
    userAgent: payload.userAgent,
  });
  if (existingUser) {
    return NextResponse.json({ message: "User already exists" });
  } else {
    let view = new userInfoModel(payload);
    const result = await view.save();
    return NextResponse.json(result);
  }
}
