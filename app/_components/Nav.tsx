import classNames from "classnames"
import Link from "next/link"

export const pages = [
  { name: '査定方法', href: '/assessment'},
  { name: '買取フォーム', href: '/form'},
]

export type NavProps = {
  className?:string,
  children?:React.ReactNode,
}

export default function Nav({className, children}: NavProps) {
  return (
    <nav className={classNames(className)}>
      <ul className='flex gap-6 items-center'>
        {pages.map(({name, href}) => (
          <li key={name}>
            <Link href={href} className="">
              {name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}