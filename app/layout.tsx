'use client'
import type { Metadata } from 'next'
import { ChakraProvider } from '@chakra-ui/react'
import  Navbar   from "@/components/Navbar"
export const metadata: Metadata = {
  title: 'WSD Servicios',
  description: 'Servicios Ing Wanner, brinda servicios de diseño de obras de construcción,'
  +'eléctricas y mecánicas, Certificación, instalación de GLPconversión de vehiculos de carga, visado de planos eléctricos',
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
