import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectionStr } from "@/app/services/db";
import { Contact } from "@/app/services/model/contact";
export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connectionStr);
    data = await Contact.find();
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json(data);
}
