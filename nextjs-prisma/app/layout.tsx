import type { Metadata } from "next";
import "./globals.css";
import {
  ClerkProvider,
  Show,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

export const metadata: Metadata = {
  title: "Next.js Prisma Example",
  description: "A simple example of using Next.js with Prisma and Clerk",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          <header>
            <Show when="signed-out">
              <SignInButton>Sign in</SignInButton>
              <SignUpButton>Sign up</SignUpButton>
            </Show>
          </header>

          <Show when="signed-out">hoHoHOHOhO</Show>

          <Show when="signed-in">{children}</Show>
        </ClerkProvider>
      </body>
    </html>
  );
}
