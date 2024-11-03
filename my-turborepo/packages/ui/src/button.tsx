"use client";

import { ReactNode } from "react";
import Link from 'next/link'


interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

export const Button = ({ children, className, href }: ButtonProps) => {
  return href? (
    <Link href={href}>
      <button>{children}</button>
    </Link>
  ):
  
    <button className={className}>
      {children}
    </button>
  
};
