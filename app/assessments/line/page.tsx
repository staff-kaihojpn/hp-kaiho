
import classNames from 'classnames'
import { StepCard } from '../../_components/Card'
import { Section } from '../../_components/section'

export default function AssessmentsLinePage() {
  const steps = [
    {title: 'LINE査定の開始', description:'ページ右下のLINEアイコンを押してください', image: '/assessments/line1.webp'},
    {title: 'トークの開始', description:'"友だち追加"を押した後、"トークボタンを押して開始', image: '/assessments/line2.webp'},
    {title: '写真の送付', description:'LINEアプリの左下のカメラボタンを押して、査定品を撮影を開始してください。', image: '/assessments/line3.webp'},
    {title: '撮影のポイント', description:'銘等の撮り忘れが無いように、複数箇所から撮影してください。', image: '/assessments/line4.webp'},
    {title: '本査定へ', description:'１営業日以内に、査定予想を返信します。買取規約に同意の上、訪問査定か、持ち込み査定の希望をお伝えください。詳細はこちら', image: '/assessments/line5.webp'},
  ]
  return (
    <Section title='LINE査定の手順'>
      <div className=' flex flex-col gap-6 max-w-2xl mx-auto '>
        {steps.map((step, index) => (
          <StepCard key={index} step={index+1} title={step.title} className={classNames((index < steps.length-1)&&'border-b-triangle')} description={step.description} image={step.image} />
        ))}
      </div>
    </Section>
  )
}
