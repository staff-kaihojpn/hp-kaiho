import AssessmentSection from "@/app/_components/_section/AsessmentSection";
import './index.scss'

export default function AssessmentsLayout({children}: { children: React.ReactNode }) {
  
  return (
    <div className="flex flex-col gap-16">
      <div className="bg-flash">
        <section className="prose mx-auto px-6 mt-12">{children}</section>
      </div>
      <AssessmentSection />
    </div>
  )
}
