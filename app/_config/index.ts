import { Crisp } from "crisp-sdk-web"
import { Metadata } from "next";


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
      name:'', 
      pages:[
        {name:'HOME', path:'/'},
        {name: 'よくある質問', path: '/faq'},
      ],
    },
    {
      name:'査定方法', 
      pages:[
        {name: 'LINE査定', path: '/assessments/line'},
        {name: 'チャット査定', path: '/assessments/chat'},
        {name: '持ち込み査定', path: '/assessments/carryin'},
        {name: '訪問査定', path: '/assessments/onsite'},
      ],
    },
    {
      name:'ポリシー', 
      pages:[
        {name: '買取規定', path: '/policy/buying'},
        {name: 'プライバシーポリシー', path: '/policy/privacy'},
        {name: '会社概要', path: '/policy/company'},
      ],
    },
  ],

  
}



export type Company = {
  [key: string]: {
    label:string; 
    value:string;
  }
}
export const company:Company = {
  name: {label:'会社名', value:'株式会社 開豊ジャパン'},
  tel: {label:'電話', value:'042-667-7005'},
  address: {label:'住所', value:'東京都八王子市大船町142-6'},
  email: {label:'メール', value:'staff.kaihojpn@gmail.com'},
  business : {label:'営業時間', value:'10:00〜18:00 (土日祝日を除く)'},
}