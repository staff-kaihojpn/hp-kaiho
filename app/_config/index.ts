import { Crisp } from "crisp-sdk-web"
import { Metadata } from "next";
import { IconType } from "react-icons";
import {BsFillTelephoneFill, BsFillGeoAltFill} from 'react-icons/bs'
import {BsCalendarCheck} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'

export const metadata:Metadata = {
  title: '開豊ジャパン',
  description: '骨董品や古美術品の買取ならお任せ下さい。数多くの骨董・古美術品を見てきた実績を生かし誠実・安心の無料査定・出張買取をさせて頂きます。お宝が眠っていることもありますので、お家の古い物の整理をされる際などお気軽にご連絡下さい。関東はもちろん関西エリア出張買い取りさせて頂きます。',
  keywords: ["骨董 買取り","古美術 買取り","遺品整理","骨董 業者","骨董 鑑定","骨董 出張"],
  viewport: "width=device-width, initial-scale=1.0"
}

export const config = {
  link: {
    line: `https://lin.ee/${process.env.NEXT_PUBLIC_LINE_SHARE_ID}`
  },
  action: {
    openChat: () => {
      Crisp.chat.open();
    }
  },

  pageGroups:[
    {
      name:'仮査定の手順', 
      pages:[
        {name: 'LINE査定', path: '/assessments/line'},
        {name: 'チャット査定', path: '/assessments/chat'},
      ],
    },
    {
      name:'本査定の手順', 
      pages:[
        {name: '持ち込み査定', path: '/assessments/carryin'},
        {name: '訪問査定', path: '/assessments/onsite'},
      ],
    },
    {
      name:'ヘルプとポリシー', 
      pages:[
        {name: 'よくある質問', path: '/help/faq'},
        {name: '出張査定・買取規約', path: '/help/rule'},
        {name: 'プライバシーポリシー', path: '/help/privacy'},
        {name: '会社概要', path: '/help/about'},
      ],
    },
  ],

  
}



export type Company = {
  [key: string]: {
    label:string; 
    value:string;
    icon?:IconType;
  }
}
export const company:Company = {
  name: {label:'会社名', value:'株式会社 開豊ジャパン'},
  address: {label:'住所', value:'東京都八王子市大船町142-6', icon:BsFillGeoAltFill},
  email: {label:'メール', value:'staff.kaihojpn@gmail.com', icon:FiMail},
  tel: {label:'電話', value:'042-667-7005', icon: BsFillTelephoneFill},
  business : {label:'営業時間', value:'10:00〜18:00 (土日祝日を除く)', icon:BsCalendarCheck},
}