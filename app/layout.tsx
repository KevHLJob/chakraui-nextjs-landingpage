'use client'
import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import  Navbar   from "@/components/Navbar"
export const metadata: Metadata = {
  title: 'Landing Page',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
          </ChakraProvider>
      </body>
    </html>
  )
}
