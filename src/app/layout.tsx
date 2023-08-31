import './globals.css'
import type { Metadata } from 'next'
import {Inter, Space_Grotesk} from 'next/font/google'
import React from "react";

const inter = Inter({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-inter',
})
const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'Fontier',
  description: 'AI Powered Font Tools',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${space_grotesk.className} font-inter`}>{children}</body>
    </html>
  )
}
