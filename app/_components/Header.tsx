import classNames from 'classnames'
import Image from 'next/image'
import Nav from './Nav'
import Link from 'next/link'


export type HeaderProps = {
  className?:string,
  children?:React.ReactNode,

}

export default function Header({className, children}: HeaderProps) {
  return (
    <header className={classNames("py-4 px-6 flex justify-between items-center", className)}>
      <div className='flex gap-4 items-center'>
        <Link href='/'>
          <Image src='/logo.svg' width={40} height={40} alt='開豊ジャパン' />
        </Link>
        
        <Link href='/'>
          <h1 className='text-2xl font-black'>開豊ジャパン</h1>
        </Link>
      </div>
      
      <Nav />
    
    </header>
  )
}