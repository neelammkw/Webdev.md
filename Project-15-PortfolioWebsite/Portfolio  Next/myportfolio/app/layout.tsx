// Import necessary modules and styles
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Import the Inter font with specified subsets
const inter = Inter({ subsets: ['latin'] })

// Define the metadata object
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

// Define the RootLayout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* Move the HTML structure to _app.js or _app.tsx */}
      {/* ... */}
      <html lang="en">
        <head>
          {/* Link to preconnect to Google Fonts */}
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          {/* Link to import the specified fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Encode+Sans:wght@200&family=Poppins:ital,wght@0,200;0,400;1,200;1,300&display=swap"
            rel="stylesheet"
          ></link>
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </>
  )
}
