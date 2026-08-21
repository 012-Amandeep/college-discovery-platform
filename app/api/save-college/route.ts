import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    const { collegeId } = await req.json();

    const cookieStore = await cookies();

    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as {
      userId: string;
      email: string;
    };

    const existing = await prisma.savedCollege.findFirst({
      where: {
        userId: decoded.userId,
        collegeId,
      },
    });

    if (existing) {
      return NextResponse.json({
        message: "College already saved",
      });
    }

    await prisma.savedCollege.create({
      data: {
        userId: decoded.userId,
        collegeId,
      },
    });

    return NextResponse.json({
      message: "College saved successfully",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}