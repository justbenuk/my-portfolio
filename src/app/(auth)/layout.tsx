import type { Metadata } from 'next';
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: 'Client Portal'
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className='main-background'>{children}</div>
  )
}

