"use client";

import React from "react";
import { Button } from "@repo/ui/button"; // You can use this Button component if you want
import { signOut } from "next-auth/react";

export default function Logout() {
  // Function to handle logout
  const handleLogout = async () => {
    await signOut({
      callbackUrl: "/", // Redirect to home page after logout (you can change the URL)
    });
  };

  return (
    <div>
      {/* Corrected the onClick to call handleLogout */}
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
