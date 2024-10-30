import '@/styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

// layout.tsx
export const metadata = {
  title: 'Arwildo',
  description: 'Jasa Modifikasi dan Tambah Fitur SIMKes Khanza. Dipercaya oleh Rumah Sakit, Klinik, Apotek, dan Praktik Dokter di Seluruh Indonesia',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}