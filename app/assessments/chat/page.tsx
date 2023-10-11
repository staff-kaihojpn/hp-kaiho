
import classNames from 'classnames'
import { StepCard } from '../../_components/Card'
import { Section } from '../../_components/section'


const steps = [
  {title: 'チャット査定の開始', description:'ページ右下のチャットアイコンを押してください、チャット画面が立ち上げります', image: '/assessments/chat1.webp'},
  {title: 'チャットを開始', description:'メッセージを送って、チャットを開始してください', image: '/assessments/chat2.webp'},
  {title: 'メールアドレスの確認', description:'連絡用のメールアドレスをおしえてください、チャットが切断された際に、再度連絡する際に必要です。', image: '/assessments/chat3.webp'},
  {title: '撮影のポイント', description:'左下の”クリップ型のボタン”を押して、撮影してください。銘等の撮り忘れが無いように、複数箇所から撮影してください。', image: '/assessments/chat4.webp'},
  {title: '本査定へ', description:'１営業日以内に、査定予想を返信します。買取規約に同意の上、訪問査定か、持ち込み査定の希望をお伝えください。詳細はこちら', image: '/assessments/chat5.webp'},
]

export default function AssessmentsChatPage() {
  return (
    <Section title='チャット査定の手順'>
      <div className=' flex flex-col gap-6 max-w-2xl mx-auto '>
        {steps.map((step, index) => (
          <StepCard key={index} step={index+1} title={step.title} className={classNames((index < steps.length-1)&&'border-b-triangle')} description={step.description} image={step.image} />
        ))}
      </div>
    </Section>
  )
}
