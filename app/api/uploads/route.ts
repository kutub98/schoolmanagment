/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import formidable from "formidable";
import path from "path";

export const config = { api: { bodyParser: false } };

export async function POST(req: NextRequest) {
  const uploadDir = path.join(process.cwd(), "/public/images");
  const form = new formidable.IncomingForm({
    uploadDir: uploadDir,
    keepExtensions: true,
  });

  return new Promise((resolve, reject) => {
    form.parse(req as any, (err, fields, files) => {
      if (err) reject(err);
      const file = (files.file as formidable.File[])[0];
      const filePath = "/images/" + path.basename(file.filepath);
      resolve(NextResponse.json({ path: filePath }));
    });
  });
}
