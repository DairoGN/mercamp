import React from 'react'
import '@/app/ui/global.css'
import { montserrat } from '@/app/ui/fonts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | MerCamp',
    default: 'MerCamp'
  },
  description: 'Mercado Campesino: Conéctate directamente con productores y vendedores locales.'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={`${montserrat.className} antialiased`}>{children}</body>
    </html>
  )
}
