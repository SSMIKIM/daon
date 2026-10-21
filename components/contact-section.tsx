"use client"

import { Card } from "@/components/ui/card"
import { MapPin, Phone, Mail, Copy, Check, Warehouse, Building2, Share2 } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import { KakaoMap } from "@/components/kakao-map"

const snsIcons = [
  {
    title: "유튜브",
    image: "/sns-icon-youtube.png",
    url: "https://www.youtube.com/@sewing_daOn",
  },
  {
    title: "네이버 블로그",
    image: "/sns-icon-blog.png",
    url: "https://blog.naver.com/daonsewing",
  },
  {
    title: "스마트 스토어",
    image: "/sns-icon-smartstore.png",
    url: "https://smartstore.naver.com/sewingdaon",
  },
  {
    title: "인스타그램",
    image: "/sns-icon-instagram.png",
    url: "https://www.instagram.com/daon__sewing",
  },
  {
    title: "카카오톡 채널",
    image: "/sns-icon-kakao.png",
    url: "http://pf.kakao.com/_GxmUxkn/chat",
  },
  {
    title: "WhatsApp",
    image: "/sns-icon-whatsapp.png",
    url: "__whatsapp_modal__",
  },
]

const snsCards = snsIcons; // Declare snsCards variable

export function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null)
  const [showWhatsAppQR, setShowWhatsAppQR] = useState(false)

  const copyToClipboard = async (text: string, itemName: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedItem(itemName)
      setTimeout(() => setCopiedItem(null), 2000)
    } catch (err) {
      console.error("Failed to copy:", err)
    }
  }

  return (
    <section id="contact" className="py-10 lg:py-20 px-4 bg-[#151515]">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="flex flex-col gap-3 lg:h-[660px]">
            {/* 1. 찾아오시는 길 */}
            <Card
              className="lg:h-[100px] p-4 bg-card border-border cursor-pointer hover:bg-secondary/50 transition-colors group flex items-center"
              onClick={() => copyToClipboard("서울특별시 광진구 천호대로137길 9, 1층", "address")}
            >
              <div className="flex items-center gap-4 w-full">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-0.5 text-foreground">{"찾아오시는 길"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{"서울특별시 광진구 천호대로137길 9, 1층"}</p>
                </div>
                {copiedItem === "address" ? (
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                )}
              </div>
            </Card>

            {/* 2. 연락처 */}
            <a href="tel:+821035448703" className="block lg:h-[100px]">
              <Card className="h-full p-4 bg-card border-border cursor-pointer hover:bg-secondary/50 transition-colors group flex items-center">
                <div className="flex items-center gap-4 w-full">
                  <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-base mb-0.5 text-foreground">{"연락처"}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{"+82 10-3544-8703"}</p>
                  </div>
                </div>
              </Card>
            </a>

            {/* 3. 이메일 */}
            <Card
              className="lg:h-[100px] p-4 bg-card border-border cursor-pointer hover:bg-secondary/50 transition-colors group flex items-center"
              onClick={() => copyToClipboard("daonsewing@gmail.com", "email")}
            >
              <div className="flex items-center gap-4 w-full">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-0.5 text-foreground">{"이메일"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{"daonsewing@gmail.com"}</p>
                </div>
                {copiedItem === "email" ? (
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                )}
              </div>
            </Card>

            {/* 4. 양평 창고 */}
            <Card
              className="lg:h-[100px] p-4 bg-card border-border cursor-pointer hover:bg-secondary/50 transition-colors group flex items-center"
              onClick={() => copyToClipboard("경기도 양평군 서종면 수입리 610-47", "warehouse")}
            >
              <div className="flex items-center gap-4 w-full">
                <Warehouse className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-0.5 text-foreground">{"양평 창고"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{"경기도 양평군 서종면 수입리 610-47"}</p>
                </div>
                {copiedItem === "warehouse" ? (
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                )}
              </div>
            </Card>

            {/* 5. 중국 사무실 */}
            <Card
              className="lg:h-[100px] p-4 bg-card border-border cursor-pointer hover:bg-secondary/50 transition-colors group flex items-center"
              onClick={() => copyToClipboard("山东省 青岛市 即墨区 通济街道 天山一路767号 卓通科技产业园 4号楼 601", "china")}
            >
              <div className="flex items-center gap-4 w-full">
                <Building2 className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex-1">
                  <h3 className="font-bold text-base mb-0.5 text-foreground">{"중국 사무실"}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{"山东省 青岛市 即墨区 通济街道 天山一路767号 卓通科技产业园 4号楼 601"}</p>
                </div>
                {copiedItem === "china" ? (
                  <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                ) : (
                  <Copy className="w-4 h-4 text-muted-foreground group-hover:text-primary flex-shrink-0 transition-colors" />
                )}
              </div>
            </Card>

            {/* 6. 소셜 네트워크 */}
            <Card className="md:h-[100px] lg:h-[100px] p-4 bg-card border-border">
              <div className="flex flex-col md:flex-row md:items-center lg:items-center gap-3 md:gap-4 lg:gap-4 w-full h-full">
                <div className="flex items-center gap-4">
                  <Share2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <h3 className="font-bold text-base text-foreground flex-shrink-0">{"소셜 네트워크"}</h3>
                </div>
                <div className="flex-1 flex items-center justify-center md:justify-start lg:justify-center gap-1.5 md:gap-2">
                  {snsIcons.map((sns, index) =>
                    sns.url === "__whatsapp_modal__" ? (
                      <button
                        key={index}
                        onClick={() => setShowWhatsAppQR(true)}
                        className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg overflow-hidden hover:scale-110 transition-transform flex-shrink-0"
                      >
                        <Image
                          src={sns.image || "/placeholder.svg"}
                          alt={sns.title}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ) : (
                      <a
                        key={index}
                        href={sns.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg overflow-hidden hover:scale-110 transition-transform flex-shrink-0 block"
                      >
                        <Image
                          src={sns.image || "/placeholder.svg"}
                          alt={sns.title}
                          width={40}
                          height={40}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    )
                  )}
                </div>
              </div>
            </Card>
          </div>

          {/* Kakao Map */}
          <Card className="p-0 bg-card border-border overflow-hidden h-[660px]">
            <KakaoMap address="서울 광진구 천호대로137길 9" placeName="daOn" level={3} />
          </Card>
        </div>



        {/* WhatsApp QR Modal */}
        {showWhatsAppQR && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setShowWhatsAppQR(false)}
          >
            <div
              className="bg-card rounded-2xl p-6 max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-foreground font-bold text-lg mb-4">WhatsApp QR Code</h3>
              <div className="bg-white rounded-xl p-4 inline-block">
                <Image
                  src="/sns-whatsapp-qr.png"
                  alt="WhatsApp QR Code"
                  width={250}
                  height={250}
                  className="w-full h-auto"
                />
              </div>
              <p className="text-muted-foreground text-sm mt-4">{"핸드폰 카메라로 QR코드를 인식해주세요"}</p>
              <button
                onClick={() => setShowWhatsAppQR(false)}
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                {"닫기"}
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">{"© 2026 daOn. All rights reserved."}</p>
      </div>
    </section>
  )
}
