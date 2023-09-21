import classNames from "classnames"
import { IconType } from "react-icons"
import Link from "next/link"
import { config } from "../_config";

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

export type ButtonProps = {
  label?:string
}
export function LineButton({label="査定をはじめる"}:ButtonProps){
  return (
    <Link href={'/assessments/line'} className="block text-lg py-2 px-4 bg-green-700 text-stone-50 rounded-full">{label}</Link>
  )
}
export function ChatButton({label="チャットで相談"}:ButtonProps){
  return (
    <div onClick={config.action.openChat} className='text-lg py-2 px-4 bg-stone-50 border-stone-300 border rounded-full cursor-pointer'>{label}</div>
  )
}