import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { Header } from "@/components/Header"
import ParticleBackground from "@/components/ParticleBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "AR Learning Platform",
  description: "Interactive AR-based learning experience",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
        <script
          type="module"
          src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.1.1/model-viewer.min.js"
        ></script>
      </head>
      <body className={`${inter.className} relative`}>
        <ParticleBackground />
        <Header />
        <main className="container mx-auto px-4 py-8 relative z-10">{children}</main>
      </body>
    </html>
  )
}

