import Navbar from '@/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'proyecto next',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        <main className="container mx-auto h-screen flex justify-center items-center">{children}</main>
      </body>
    </html>
  )
}
