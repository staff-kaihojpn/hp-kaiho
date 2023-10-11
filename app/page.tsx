import HeroSection from './_components/section/HeroSection'
import HowtoSection from './_components/section/HowtoSection'
import ItemSection from './_components/section/ItemSection'
import AssessmentSection from './_components/section/AsessmentSection'
import ReviewSection from './_components/section/ReviewSection'

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
