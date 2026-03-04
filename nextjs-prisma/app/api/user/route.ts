import { NextResponse } from "next/server";
import prisma from "../../../lib/prisma";

export async function POST(request: Request) {
  try {
    const user = await prisma.user.create({
      data: {
        email: "test@example.com",
        id: "123",
      },
    });
    console.log("User created:", user);
    return NextResponse.json({
      message: "User created successfully!",
      status: 201,
    });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response("Failed to create user.", { status: 500 });
  }
}
