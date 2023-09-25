import './globals.css'
import { Inter, Yuji_Syuku } from 'next/font/google'
import Header, { MobileNav } from './_components/Header'
import Footer from './_components/Footer'
import classNames from 'classnames'
import dynamic from 'next/dynamic'
import { metadata as meta } from './_config'

const inter = Inter({ subsets: ['latin'] })

const yuji_syuku = Yuji_Syuku({
  subsets: ['latin'],
  weight:"400",
  variable: '--font-yuji-syuku',
})

export const metadata = meta

export default function RootLayout({children}: { children: React.ReactNode }) {
  const CrispChat = dynamic(() => import('./_components/CrispChat'))
  
  return (
    <html lang="ja" className={classNames([yuji_syuku.variable])}>
      {process.env.NEXT_PUBLIC_CRISP_WEBSITE_ID && <CrispChat />}
      <body className={classNames(/*[inter.className]*/)}>
        <Header className='sticky top-0' />
        <div className="h-full mb-auto pt-12">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
