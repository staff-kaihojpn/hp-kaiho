
import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web"

export const Config = {
  link: {
    line: `https://lin.ee/${process.env.NEXT_PUBLIC_LINE_SHARE_ID}`
  },
  action: {
    openChat: () => {
      Crisp.chat.open();
    }
  }
}