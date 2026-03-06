// import { NextResponse } from "next/server";
// import prisma from "../../../lib/prisma";

// export async function POST(request: Request) {
//   try {
//     const user = await prisma.user.create({
//       data: {
//         email: "test@example.com",
//         id: "123",
//       },
//     });
//     console.log("User created:", user);
//     return NextResponse.json({
//       message: "User created successfully!",
//       status: 201,
//     });
//   } catch (error) {
//     console.error("Error creating user:", error);
//     return new Response("Failed to create user.", { status: 500 });
//   }
// }

import { NextResponse, NextRequest } from "next/server";
import prisma from "../../../lib/prisma";
import {webhook} from "svix"

export async function POST(req: NextRequest) {
const webhookSecret = process.env.WEBHOOK_KEY

if (!webhookSecret) {
  return NextResponse.json({ error: "Missing webhook secret" }, { status: 400 });

  const svixId =req.headers.get("svix-id")
  const svixTimeStamp = req.headers.get("svix-timestamp")
  const svixSignature = req.headers.get("svix-signature")

  if (!svixId || !svixTimeStamp || !svixSignature) {
    return NextResponse.json({ error: "Missing headers" }, {status: 400})
  }

  const webhook = new Webhook
}
