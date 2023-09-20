'use client'

import classNames from "classnames";
import { CountUp, useCountUp } from "use-count-up";
import { digitalNumbers } from '@/app/styles/fonts'
import { useInView } from "@react-spring/web";
import { useEffect, useMemo } from "react";

export type CounterProps = {
  mini?:boolean,
  outerComment?:string,
  innerComment?:string,
  className?:string,
  children?:React.ReactNode,
}

export default function Counter({mini=true, outerComment, className, children}:CounterProps){

  const [ref, inView] = useInView({
    rootMargin: '-90px 0px -30% 0px',
  })

  const { value, reset } = useCountUp({
    isCounting: true,
    start: 58000,
    end: 63800,
    duration: 1.5,
  })

  useEffect(() => {
    if (inView) {
      reset()
    }
  }, [inView])

  
  return (
    <div className={classNames(className)}>
      <div className='flex flex-col items-center mb-6 gap-2'>
        {outerComment && <p className='text-center fukidashi px-6 font-bold'>{outerComment}</p>}

        <div className='flex rounded-lg bg-stone-500 '>
          <p className='vertical-rl bg-stone-600 text-green-50 rounded-l-lg font-bold text-center'>査定額</p>
          <div ref={ref} className={classNames("inline-block text-5xl text-green-50 p-4 text-right", digitalNumbers.className)}>
            {value}
          </div>
        </div>
      </div>
    </div>
  )
}

