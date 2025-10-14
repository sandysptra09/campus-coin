// app/api/data/route.ts
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data/sessions.json");

export async function GET() {
  const data = fs.readFileSync(filePath, "utf8");
  return NextResponse.json(JSON.parse(data));
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const data = fs.readFileSync(filePath, "utf8");
    const json = JSON.parse(data);

    const updated = { ...json, ...body };

    fs.writeFileSync(filePath, JSON.stringify(updated, null, 2), "utf8");

    return NextResponse.json({ success: true, updated });
  } catch (error) {
    console.error("Error updating session file:", error);
    return NextResponse.json(
      { error: "Failed to update session file" },
      { status: 500 }
    );
  }
}
