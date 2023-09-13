import './globals.css'
import type { Metadata } from 'next'
import { Inter, Yuji_Syuku } from 'next/font/google'
import Header from './_components/Header'
import Footer from './_components/Footer'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

const yuji_syuku = Yuji_Syuku({
  subsets: ['latin'],
  weight:"400",
  variable: '--font-yuji-syuku',
})

export const metadata: Metadata = {
  title: '開豊ジャパン',
  description: '骨董品や古美術品の買取ならお任せ下さい。数多くの骨董・古美術品を見てきた実績を生かし誠実・安心の無料査定・出張買取をさせて頂きます。お宝が眠っていることもありますので、お家の古い物の整理をされる際などお気軽にご連絡下さい。関東はもちろん関西エリア出張買い取りさせて頂きます。',
  keywords:["骨董 買取り","古美術 買取り","遺品整理","骨董 業者","骨董 鑑定","骨董 出張"],
  viewport:"width=device-width, initial-scale=1.0"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={classNames([yuji_syuku.variable])}>
      <body className={classNames([inter.className])}>
        <Header className='sticky top-0'/>
        <div className="h-full mb-auto">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
