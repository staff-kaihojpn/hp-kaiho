import AssessmentSection from "@/app/_components/_section/AsessmentSection";

export default function AssessmentsLayout({children}: { children: React.ReactNode }) {
  
  return (
    <div className="flex flex-col gap-16">
      <div className="prose mx-auto px-6 mt-12">{children}</div>
      <AssessmentSection />
    </div>
  )
}
