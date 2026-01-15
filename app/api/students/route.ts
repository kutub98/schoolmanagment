
import Student from "@/app/models/Student";
import dbConnect from "@/app/utils/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function GET(req: NextRequest) {
  await dbConnect();
  const students = await Student.find().populate("user mentor");
  return NextResponse.json(students);
}

export async function POST(req: NextRequest) {
  await dbConnect();
  const body = await req.json();
  const student = await Student.create(body);
  return NextResponse.json(student, { status: 201 });
}
