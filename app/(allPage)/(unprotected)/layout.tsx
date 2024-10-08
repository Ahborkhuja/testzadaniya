import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderLayout from '../../../components/Organisms/Layout/Header/index';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Test work',
  description: 'Test work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderLayout />
        {children}

      </body>
    </html>
  )
}
