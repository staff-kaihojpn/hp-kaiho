
import { StepCard } from '../../_components/Card'
import { Section } from '../../_components/Section'
import {LiaUserFriendsSolid} from 'react-icons/lia'

export default function Assessment() {
  return (
    <Section title='LINE査定'>
      <div className='max-w-3xl mx-auto' >
        <StepCard step={1} title="LINEで友達追加" icon={LiaUserFriendsSolid} />
        <StepCard step={2} title="査定品の撮影" icon={LiaUserFriendsSolid} />
        <StepCard step={3} title="概算の査定額を計算" icon={LiaUserFriendsSolid} />
        <StepCard step={4} title="本査定へ" icon={LiaUserFriendsSolid} />      
      </div>
    </Section>
  )
}
