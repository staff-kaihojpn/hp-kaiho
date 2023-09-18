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


type ButtonProps = React.ComponentProps<typeof Link> & {
  icon?: IconType;
  label: string;
};
export function Button({icon:Icon, className, ...props}: ButtonProps) {
  return (
    <Link {...props} className={classNames(className, "block cursor-pointer px-4 py-2 tracking-wide text-lg")}>
      {Icon && <Icon className="w-8 h-full m-auto"/> }
      <span className="block text-center">{props.label}</span>
    </Link>
  )
}