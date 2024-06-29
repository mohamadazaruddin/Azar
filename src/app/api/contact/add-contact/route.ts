import { connectionStr } from "@/app/services/db";
import mongoose from "mongoose";
import { Contact } from "../../../services/model/contact";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const payload = await req.json();
  await mongoose.connect(connectionStr);
  let comment = new Contact(payload);
  const result = await comment.save();
  return NextResponse.json(result);
}
