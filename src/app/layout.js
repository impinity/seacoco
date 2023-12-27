import { Playfair_Display } from 'next/font/google'
import './globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const font = Playfair_Display({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'SeaCoco.id',
  description: 'From Shore to Your Door: SeaCoco.id - Your Premier Source for Coconut Treasures!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
      {children}
      </body>
    </html>
  )
}
