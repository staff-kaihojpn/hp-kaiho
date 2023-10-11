import HeroSection from './_components/_section/HeroSection'
import HowtoSection from './_components/_section/HowtoSection'
import ItemSection from './_components/_section/ItemSection'
import AssessmentSection from './_components/_section/AsessmentSection'
import ReviewSection from './_components/_section/ReviewSection'

export default function Home() {
  return (
    <div className='flex flex-col whitespace-pre-wrap'>
      <HeroSection />
      <HowtoSection />
      <ItemSection />
      <AssessmentSection />
      <ReviewSection />
    </div>
  )
}
