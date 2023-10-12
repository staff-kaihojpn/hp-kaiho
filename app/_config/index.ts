import { Crisp } from "crisp-sdk-web"
import { Metadata } from "next";
import { IconType } from "react-icons";
import { AiOutlineIdcard } from "react-icons/ai";
import {BsFillTelephoneFill, BsFillGeoAltFill} from 'react-icons/bs'
import {BsCalendarCheck} from 'react-icons/bs'
import {FiMail} from 'react-icons/fi'
import { SiPostgresql } from "react-icons/si";

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
      name:'かんたん査定とは', 
      pages:[
        {name: 'かんたん査定(LINE)', path: '/assessments/line'},
        {name: 'かんたん査定(チャット)', path: '/assessments/chat'},
      ],
    },
    {
      name:'本査定とは', 
      pages:[
        {name: '本査定(訪問)', path: '/assessments/onsite'},
        {name: '本査定(持込)', path: '/assessments/carryin'},
      ],
    },
    {
      name:'ヘルプとポリシー', 
      pages:[
        {name: 'よくある質問', path: '/help/faq'},
        {name: '買取規約', path: '/help/rule'},
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
  licence: {label:'古物商許可証', value:'東京都公安委員会 第304360606938号', icon:AiOutlineIdcard},
  licenceIvory: {label:'特別国際種事業者', value:'第02734号', icon:SiPostgresql},
}