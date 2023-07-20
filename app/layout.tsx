'use client'
import { ChakraProvider } from '@chakra-ui/react'
import  Navbar   from "@/components/Navbar"


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" title='Wanner Servicios'>
      <meta name='Wanner Servicios'
      content='Servicios de Ingeniería electromecánica'/>
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
          </ChakraProvider>
      </body>
    </html>
  )
}
