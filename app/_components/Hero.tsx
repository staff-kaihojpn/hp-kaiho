import Image from 'next/image'

export type HeroProps = {
  title: string
  description: string
  image?: {
    src:string, 
    width:number, 
    height:number, 
    alt:string
  }
  className?:string,
  children?:React.ReactNode,

}

export default function Hero({title, image, description}: HeroProps) {
  return (
    <div className='relative w-full h-[100dvh]'>
      {image && <Image fill {...image} />}
      {title && 
        <div className='absolute top-0 bottom-0 left-0'>
          <title className='text-6xl'>{title}</title>
          {description && <p className='text-2xl'>{description}</p>}
        </div>
      }
    </div>
  )
}