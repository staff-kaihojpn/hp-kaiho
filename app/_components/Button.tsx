import classNames from "classnames"
import { IconType } from "react-icons"
import Link from "next/link"

type FloatingButtonProps = React.ComponentProps<typeof Link> & {
  icon: IconType;
};

export function FloatingButton({icon:Icon, className, ...props}: FloatingButtonProps) {
  return (
    <Link {...props} aria-label="to line app" className={classNames("block rounded-full w-[54px] xs:w-[60px] aspect-square cursor-pointer shadow-md ", className)}>
      <Icon className="w-8 h-full m-auto"/>
    </Link>
  )
}
