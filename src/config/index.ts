export const metadata = {
  title: '骨董品・古美術品の買取なら - 開豊ジャパン',
  description: '骨董品や古美術品の買取ならお任せ下さい。数多くの骨董・古美術品を見てきた実績を生かし誠実・安心の無料査定・出張買取をさせて頂きます。お宝が眠っていることもありますので、お家の古い物の整理をされる際などお気軽にご連絡下さい。関東はもちろん関西エリア出張買い取りさせて頂きます。',
  keywords: ["骨董 買取り","古美術 買取り","遺品整理","骨董 業者","骨董 鑑定","骨董 出張"],
  viewport: "width=device-width, initial-scale=1.0"
};

export const config = {
  link: {
    line: `https://lin.ee/${import.meta.env.PUBLIC_LINE_SHARE_ID}`
  },
  action: {
    openChat: () => {
      // Chat functionality will be handled client-side
      if (typeof window !== 'undefined' && window.Crisp) {
        window.Crisp.chat.open();
      }
    }
  },

  pageGroups: [
    {
      name: 'かんたん査定', 
      pages: [
        {name: 'かんたん査定(LINE)', path: '/assessments/line'},
        {name: 'かんたん査定(チャット)', path: '/assessments/chat'},
      ],
    },
    {
      name: '本査定', 
      pages: [
        {name: '本査定(訪問)', path: '/assessments/onsite'},
        {name: '本査定(持込)', path: '/assessments/carryin'},
      ],
    },
    {
      name: 'ヘルプとポリシー', 
      pages: [
        {name: 'よくある質問', path: '/help/faq'},
        {name: '買取規約', path: '/help/rule'},
        {name: 'プライバシーポリシー', path: '/help/privacy'},
        {name: '会社概要', path: '/help/about'},
      ],
    },
  ],
};

export type Company = {
  [key: string]: {
    label: string; 
    value: string;
    icon?: string;
  }
}

export const company: Company = {
  siteName: {label: '会社名', value: '開豊ジャパン'},
  name: {label: '会社名', value: '株式会社 開豊ジャパン'},
  address: {label: '住所', value: '東京都八王子市大船町142-6', icon: '📍'},
  email: {label: 'メール', value: 'staff.kaihojpn@gmail.com', icon: '📧'},
  tel: {label: '電話', value: '042-667-7005', icon: '📞'},
  business: {label: '営業時間', value: '10:00〜18:00 (土日祝日を除く)', icon: '🕐'},
  licence: {label: '古物商許可証', value: '東京都公安委員会 第304360606938号', icon: '📋'},
  licenceIvory: {label: '特別国際種事業者', value: '第02734号', icon: '🔖'},
};