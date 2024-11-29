"use client";

import { Button } from "@repo/ui/button"; // Your Button component
import React from "react";

export default function Signin() {
  // Redirect to NextAuth sign-in page
  const handleSignIn = () => {
    window.location.href = "/api/auth/signin"; // Redirecting to default NextAuth sign-in page
  };

  return (
    <>
      <Button onClick={handleSignIn}>Sign In</Button>
    </>
  );
}