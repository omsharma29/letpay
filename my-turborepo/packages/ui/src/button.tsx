"use client";

import { ReactNode } from "react";
import Link from 'next/link'
import { useSession } from 'next-auth/react'


interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export const Button = ({ children, className, href }: ButtonProps) => {
  const session = useSession()

  return href? (
    <Link href={href}>
      <button>{children}</button>
      {JSON.stringify(session)}

    </Link>
  ):
  
    <button className={className}>
      {children}
    </button>
  
};
