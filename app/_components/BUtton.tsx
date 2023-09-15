import classNames from "classnames"
import { IconType } from "react-icons"
import Link from "next/link"

type FloatingButtonProps = React.ComponentProps<typeof Link> & {
  icon: IconType;
};

export function FloatingButton({icon:Icon, className, ...props}: FloatingButtonProps) {
  return (
    <Link {...props} className={classNames("block rounded-full w-[60px] aspect-square cursor-pointer shadow-md ", className)}>
      <Icon className="w-8 h-full m-auto"/>
    </Link>
  )
}