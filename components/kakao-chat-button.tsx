"use client"

import { MessageCircle, Phone, X } from "lucide-react"
import { useState } from "react"

export function KakaoChatButton() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 lg:bottom-6 lg:right-6 z-50 flex flex-col items-center gap-2 lg:gap-3">
      {/* Expanded options */}
      <div
        className={`flex flex-col items-center gap-2 lg:gap-3 transition-all duration-300 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        {/* Phone call button */}
        <a
          href="tel:+821035448703"
          className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#34C759] hover:bg-[#2DB84D] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="전화 연결"
        >
          <Phone className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
        </a>

        {/* KakaoTalk button */}
        <a
          href="http://pf.kakao.com/_GxmUxkn/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[#FEE500] hover:bg-[#FDD835] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
          aria-label="카카오톡 채널 상담"
        >
          <MessageCircle className="w-5 h-5 lg:w-6 lg:h-6 text-[#3C1E1E]" />
        </a>
      </div>

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center justify-center w-12 h-12 lg:w-14 lg:h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          isOpen ? "bg-muted-foreground/80 hover:bg-muted-foreground" : "bg-[#FEE500] hover:bg-[#FDD835]"
        }`}
        aria-label={isOpen ? "메뉴 닫기" : "상담 메뉴 열기"}
      >
        {isOpen ? (
          <X className="w-6 h-6 lg:w-7 lg:h-7 text-white transition-transform" />
        ) : (
          <MessageCircle className="w-6 h-6 lg:w-7 lg:h-7 text-[#3C1E1E] transition-transform" />
        )}
      </button>
    </div>
  )
}
