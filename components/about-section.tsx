"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export function AboutSection() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [slideDirection, setSlideDirection] = useState<"left" | "right">("right")
  const [showDaonContent, setShowDaonContent] = useState(true)
  const [showIntroContent, setShowIntroContent] = useState(false)
  const [showEducationContent, setShowEducationContent] = useState(false)
  const [showASContent, setShowASContent] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)
  const navRef = useRef<HTMLDivElement>(null)
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })

  const updatePillStyle = () => {
    const btn = btnRefs.current[activeCategory]
    const container = navRef.current
    if (btn && container) {
      const containerRect = container.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      setPillStyle({
        left: btnRect.left - containerRect.left + container.scrollLeft,
        width: btnRect.width,
      })
    }
  }

  useEffect(() => {
    updatePillStyle()
  }, [activeCategory])

  useEffect(() => {
    // Recalculate after logo image loads
    const timer = setTimeout(updatePillStyle, 100)
    window.addEventListener("resize", updatePillStyle)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", updatePillStyle)
    }
  }, [])

  useEffect(() => {
    if (activeCategory === 0) {
      setShowDaonContent(false)
      const timer = setTimeout(() => {
        setShowDaonContent(true)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setShowDaonContent(false)
    }
    if (activeCategory === 1) {
      setShowIntroContent(false)
      const timer = setTimeout(() => {
        setShowIntroContent(true)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setShowIntroContent(false)
    }
    if (activeCategory === 2) {
      setShowEducationContent(false)
      const timer = setTimeout(() => {
        setShowEducationContent(true)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setShowEducationContent(false)
    }
    if (activeCategory === 3) {
      setShowASContent(false)
      const timer = setTimeout(() => {
        setShowASContent(true)
      }, 50)
      return () => clearTimeout(timer)
    } else {
      setShowASContent(false)
    }
  }, [activeCategory])

  const aboutCategories = [
    { title: "다온", isLogo: true },
    { title: "소개", isLogo: false },
    { title: "교육", isLogo: false },
    { title: "A/S", isLogo: false },
  ]

  const categoryContent = [
    { text: "" },
    { text: "" },
    { text: "" },
    { text: "" },
  ]

  const handleCategoryChange = (index: number) => {
    if (index > activeCategory) {
      setSlideDirection("right")
    } else if (index < activeCategory) {
      setSlideDirection("left")
    }
    setActiveCategory(index)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      if (activeCategory < aboutCategories.length - 1) {
        handleCategoryChange(activeCategory + 1)
      }
    }
    if (touchEndX.current - touchStartX.current > 50) {
      if (activeCategory > 0) {
        handleCategoryChange(activeCategory - 1)
      }
    }
  }

  return (
    <section id="about" className="py-10 lg:py-20 px-4 pt-20 lg:pt-24 bg-black">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <div className="h-[520px] md:h-[580px] lg:h-[640px] flex flex-col items-center justify-center w-full mb-8">
            <div className="mb-6 w-80 md:w-[36rem] h-[240px] md:h-[320px] lg:h-[360px] relative rounded-xl overflow-hidden flex-shrink-0">
              {activeCategory === 0 && (
                <div className={`w-full h-full relative transition-all duration-1000 ease-out ${showDaonContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <Image
                    src="/about-daon.png"
                    alt="daOn sewing system"
                    fill
                    className="object-contain"
                  />
                </div>
              )}

              {activeCategory === 1 && (
                <div className={`w-full h-full relative transition-all duration-1000 ease-out ${showIntroContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <Image
                    src="/about-intro.png"
                    alt="소개"
                    fill
                    className="object-cover rounded-xl"
                  />
                </div>
              )}

              {activeCategory === 2 && (
                <div className={`w-full h-full relative transition-all duration-1000 ease-out ${showEducationContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <Image
                    src="/about-education.png"
                    alt="교육"
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              {activeCategory === 3 && (
                <div className={`w-full h-full relative transition-all duration-1000 ease-out ${showASContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                  <Image
                    src="/about-as.png"
                    alt="A/S"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </div>

            {activeCategory === 0 ? (
              <div className="w-full max-w-3xl text-center overflow-hidden">
                <p
                  className={`text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-700 ease-out ${
                    showDaonContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  <span className="text-primary font-medium">로고 "d" 상단에 위치한 바늘귀</span>는 아무리 좋은 실과
                  천이 있어도 바늘귀를 통과하지 못하면{" "}
                  <span className="text-primary font-medium">한 땀의 바느질도 시작될 수 없습니다</span>. 다온쏘잉
                  시스템은 고객분들의 <span className="text-primary font-medium">시작을 도와주는 역할로 최선</span>을
                  다하겠습니다.
                </p>
              </div>
            ) : activeCategory === 1 ? (
              <div className="w-full max-w-3xl text-center overflow-hidden">
                <p
                  className={`text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-700 ease-out ${
                    showIntroContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  안녕하세요. 저희 <span className="text-primary font-medium">다온 쏘잉 시스템</span> 홈페이지에 방문해주셔서 감사합니다.
                  {" "}저희 다온 쏘잉 시스템은 <span className="text-primary font-medium">일반 재봉기부터 ~ 자동화 재봉기까지</span> 폭 넓은 라인업을
                  바탕으로 국내의 봉제 관련 업종과 다양한 산업 현장에 <span className="text-primary font-medium">최적화된 솔루션</span>을 제공하고 있습니다.
                  {" "}저희 다온 쏘잉 시스템은 단순한 장비 공급을 넘어, 파트너사의 <span className="text-primary font-medium">생산 효율 극대화와 품질 향상</span>을
                  최고의 가치로 삼고 있습니다. 끊임없는 기술 지원과 혁신을 통해 귀사의 성공적인 비즈니스 여정에{" "}
                  <span className="text-primary font-medium">든든한 동반자</span>가 되도록 노력하겠습니다.
                </p>
              </div>
            ) : activeCategory === 2 ? (
              <div className="w-full max-w-3xl text-center overflow-hidden">
                <p
                  className={`text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-700 ease-out ${
                    showEducationContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  자동화 재봉기는 고객사의 작업 공정에 맞춰{" "}
                  <span className="text-primary font-medium">1:1 주문 제작</span> 방식으로 생산됩니다. 다온 쏘잉
                  시스템은 장비 납품 시 전문 엔지니어가 <span className="text-primary font-medium">직접 방문하여</span>{" "}
                  현장 맞춤 교육을 진행합니다. 새로운 장비가 생소하더라도{" "}
                  <span className="text-primary font-medium">기존 작업자가 빠르게 숙련될 수 있도록</span> 당사가
                  최대한의 노력으로 생산 현장에서 <span className="text-primary font-medium">즉시 운영</span>이
                  가능하도록 교육을 도와드립니다.
                </p>
              </div>
            ) : activeCategory === 3 ? (
              <div className="w-full max-w-3xl text-center overflow-hidden">
                <p
                  className={`text-sm md:text-base text-muted-foreground leading-relaxed transition-all duration-700 ease-out ${
                    showASContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                >
                  당사는 신속한 애프터서비스 제공을 위해 전국 협력업체와 함께 운영하고 있습니다. 간단한 문제는{" "}
                  <span className="text-primary font-medium">협력 업체를 통해 처리</span>하며, 소프트웨어 및 전문 기술이
                  필요한 사항은 <span className="text-primary font-medium">당사</span>에서 직접 대응합니다. 당사
                  사무실과 접근이 용이한 지역의 경우{" "}
                  <span className="text-primary font-medium">24시간 이내 방문을 원칙</span>으로 하며, 물리적 거리가 있는
                  경우에도 A/S 접수 시 협의된 시간 내에{" "}
                  <span className="text-primary font-medium">반드시 방문하여 문제 해결을 목표</span>로 하고 있습니다.
                </p>
              </div>
            ) : (
              <div className="text-center text-muted-foreground max-w-3xl text-sm md:text-base leading-relaxed px-2 md:px-4 flex items-center justify-center">
                <p>{categoryContent[activeCategory].text}</p>
              </div>
            )}
          </div>

          <div
            ref={navRef}
            className="flex max-w-fit mx-auto bg-[#1a1a1a] rounded-full p-1 relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 ease-out"
              style={{
                left: pillStyle.left,
                width: pillStyle.width,
              }}
            />

            {aboutCategories.map((category, index) => (
              <button
                key={index}
                ref={(el) => { btnRefs.current[index] = el }}
                onClick={() => handleCategoryChange(index)}
                className={`
                  relative px-4 py-2.5 rounded-full text-xs font-medium z-10
                  transition-colors duration-300 flex items-center justify-center
                  ${activeCategory === index ? "text-black" : "text-white/70"}
                `}
              >
                {category.isLogo ? (
                  <Image src="/images/daon-text-logo.png" alt="daOn" width={80} height={24} className="h-3 w-auto" />
                ) : (
                  category.title
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
