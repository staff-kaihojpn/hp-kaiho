import classNames from "classnames"
import Link from "next/link"

export const pages = [
  { name: '査定方法', href: '/assessment'},
  { name: '買取フォーム', href: '/'},
]

export type NavProps = {
  className?:string,
  children?:React.ReactNode,
}

export default function Nav({className, children}: NavProps) {
  return (
    <nav className={classNames(className)}>
      <ul className='flex gap-4 items-center'>
        {pages.map(({name, href}) => (
            <li key={name} >
              <Link className="block py-2 px-3" href={href} >
                {name}
              </Link>
            </li>
          
        ))}
      </ul>
    </nav>
  )
}