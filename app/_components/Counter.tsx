'use client'

import classNames from "classnames";
import { CountUp, useCountUp } from "use-count-up";
import { digitalNumbers } from '@/app/styles/fonts'
import { useInView } from "@react-spring/web";
import { useEffect, useMemo } from "react";

export type CounterProps = {
  start?:number,
  end:number,
  duration?:number,
  mini?:boolean,
  outerComment?:string,
  innerComment?:string,
  className?:string,
  children?:React.ReactNode,
}

export default function Counter({start=0, end, duration=1, mini=false, outerComment, innerComment, className, children}:CounterProps){

  const [ref, inView] = useInView({
    rootMargin: '-180px 0px -50px 0px',
  })

  const { value, reset } = useCountUp({
    isCounting: true,
    thousandsSeparator: ',',
    start: start,
    end: end,
    duration: duration,
  })

  useEffect(() => {
    if (inView) {
      reset()
    }
  }, [inView])

  
  return (
    <div className={classNames(className)}>
      <div className='flex flex-col items-center gap-2'>
        {outerComment && <p className='text-center fukidashi px-6 font-bold'>{outerComment}</p>}
        <div ref={ref} className='flex rounded-lg bg-stone-500/70 '>
          <p className={classNames('vertical-rl bg-stone-600/80 text-green-50 rounded-l-lg  text-right  font-bold', mini?'py-1 sm:py-2':'py-4')}>￥</p>
          <div className={classNames("inline-block text-green-50 text-right", mini?'p-1 sm:p-2 text-lg sm:text-2xl ':'p-4 text-5xl', digitalNumbers.className)}>
            {value}
          </div>
        </div>
      </div>
    </div>
  )
}

