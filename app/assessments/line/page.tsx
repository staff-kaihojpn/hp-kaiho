
import classNames from 'classnames'
import { StepCard } from '../../_components/Card'
import { Section } from '../../_components/Section'
import {LiaUserFriendsSolid} from 'react-icons/lia'

export default function AssessmentsLinePage() {
  const steps = [
    {title: 'LINEで友達追加', description:'友達追加ボタンを押してください。', icon: LiaUserFriendsSolid},
    {title: '査定品の撮影', description:'トーク画面に査定品の画像を送ってください', icon: LiaUserFriendsSolid},
    {title: '概算を見積もり', description:'1営業日以内に、概算の見積もり金額を返信します', icon: LiaUserFriendsSolid},
    {title: '査定品の梱包', description:'買取規定をお読みいただき、査定品を弊社までお送りください', icon: LiaUserFriendsSolid},
    {title: '本査定', description:'弊社到着後に、本査定を行い最終の買取額を査定します', icon: LiaUserFriendsSolid},
  ]
  return (
    <Section title='LINE査定'>
      <div className='max-w-3xl mx-auto flex flex-col gap-6' >
        {steps.map((step, index) => (
          <StepCard key={index} step={index+1} title={step.title} className={classNames((index < steps.length-1)&&'border-b-triangle')} description={step.description} icon={step.icon} />
        ))}
      </div>
    </Section>
  )
}
