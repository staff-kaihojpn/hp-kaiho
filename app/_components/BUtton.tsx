import classNames from "classnames"
import { IconType } from "react-icons"
import Link from "next/link"

export type FloatingButtonProps = {
  href: string;
  icon: IconType;
  className?: string;
}

export function FloatingButton({href, icon:Icon, className}: FloatingButtonProps) {
  return (
    <Link href={href} className={classNames("block rounded-full w-[60px] aspect-square cursor-pointer shadow-md ", className)}>
      <Icon className="w-8 h-full m-auto"/>
    </Link>
  )
}