import AssessmentSection from "@/app/_components/section/AsessmentSection";

export default function AssessmentsLayout({children}: { children: React.ReactNode }) {
  
  return (
    <div className="flex flex-col gap-16">
      {children}
      <AssessmentSection />
    </div>
  )
}
