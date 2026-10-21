"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AutomationSection() {
  const [selectedCategory, setSelectedCategory] = useState(0)
  const [expandedMobile, setExpandedMobile] = useState(0)
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // 항상 표시할 7개의 이미지
  const automationImages = [
    { src: "/automation-new-1.png", alt: "대형 자동 재단 시스템" },
    { src: "/automation-new-2.png", alt: "정밀 지그 어셈블리" },
    { src: "/automation-new-3.png", alt: "컨베이어 워크스테이션" },
    { src: "/automation-new-4.png", alt: "자동 봉제 시스템" },
    { src: "/automation-new-5.png", alt: "자동화 봉제 장비 도면" },
    { src: "/automation-new-6.png", alt: "원단 공급 및 재단 장비" },
    { src: "/automation-new-7.jpg", alt: "스마트 팩토리 레이아웃" },
  ]

  const automationSystems = [
    {
      title: "어떤 제품이 자동화가 가능한가요? (적용사례)",
      description:
        "봉제는 의류부터 시작해서 굉장히 많은 제품을 봉제합니다. 각각의 봉제 안에서도 공정이 있어 명확한 답변을 드리긴 어렵습니다. 하지만 현 단계에서는 평면 작업인 경우에는 80% 이상 가능하다고 보고 있습니다.",
    },
    {
      title: "어떻게 진행이 되나요?",
      description:
        "1단계 : 당사가 작업 공정을 직접 확인한 뒤 상담 진행\n2단계 : 설계 사무실과 가능성 여부 확인\n3단계 : 고객사와 대략적인 방식과 생산성 회의\n4단계 : 계약서 작성\n5단계 : 고객사와 3D 설계 도면 확인\n6단계 : 7~80% 재봉기가 완료 되었을 때 고객사와 함께 봉제 테스트, 요청 사항 수정 진행\n7단계 : 납품 및 교육"
    },
    {
      title: "설치와 교육은 어떻게 되나요?",
      description:
        "당사가 직접 방문하여 현장에서 설치를 진행합니다. 설치 완료 후 직접 교육을 해드리고 있으며 새로운 장비가 생소하더라도 기존 작업자가 빠르게 숙련될 수 있도록 당사가 최대한의 노력으로 생산 현장에서 즉시 운영이 가능하도록 교육을 도와드립니다."
    },
    {
      title: "After-Sales Service의 기간과 방식을 알고 싶어요",
      description:
        "기간 : 계약 조건에 따라 다르지만 통상적으로 1년간 무상 A/S 진행 해드립니다. 다만, 고객 과실시 무상 A/S 기간내에는 부속 비용만 청구 됩니다. 이후 유상 A/S가 진행됩니다.\n\n방식 : 24시간 이내 방문을 원칙으로 하며, 물리적 거리가 있는 경우에도 A/S 접수 시 협의된 시간 내에 반드시 방문하여 문제 해결을 목표로 하고 있습니다."
    },
  ]

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      if (direction === "left") {
        scrollContainerRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" })
      } else {
        scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
      }
    }
  }

  return (
    <section id="automation" className="py-10 lg:py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-8">
          <h2 className="text-2xl md:text-4xl font-bold mb-2 text-white">자동화 설계</h2>
          <p className="text-muted-foreground">업체 또는 공정에 맞게 재봉기를 설계하여 제작 합니다</p>
        </div>

        {/* Top: Netflix-style horizontal scroll gallery - full width */}
        <div className="w-full mb-12">
          <div className="relative group">
            {/* Left Arrow */}
            <button
              onClick={() => scroll("left")}
              className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-black rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={() => scroll("right")}
              className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-black rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-white" />
            </button>

            {/* Scroll Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-1 overflow-x-auto scrollbar-hide pb-4"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {automationImages.map((image, index) => (
                <div key={index} className="w-[65%] md:w-[45%] lg:w-[24%] flex-shrink-0">
                  <div className="rounded-lg overflow-hidden">
                    <div className="bg-white aspect-[4/3]">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom: 2-column layout with categories on left and content on right */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Categories (vertical list) */}
          <div className="lg:col-span-1 space-y-2">
            {automationSystems.map((system, index) => (
              <div key={index}>
                {/* Desktop: simple button that selects category */}
                <button
                  onClick={() => {
                    setSelectedCategory(index)
                    setExpandedMobile(index)
                  }}
                  className={`hidden lg:block w-full text-left px-6 py-6 rounded-lg border transition-all ${
                    selectedCategory === index
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-card border-border text-foreground hover:bg-secondary/20'
                  }`}
                >
                  <h3 className="text-xs md:text-sm font-bold">{system.title}</h3>
                </button>

                {/* Mobile/Tablet: Accordion style */}
                <div className="lg:hidden">
                  <button
                    onClick={() => setExpandedMobile(expandedMobile === index ? -1 : index)}
                    className={`w-full text-left px-8 py-6 rounded-lg border transition-all flex items-center justify-between ${
                      expandedMobile === index
                        ? 'bg-primary text-primary-foreground border-primary'
                        : 'bg-card border-border text-foreground hover:bg-secondary/20'
                    }`}
                  >
                    <h3 className="text-xs md:text-sm font-bold">{system.title}</h3>
                    {expandedMobile === index ? (
                      <ChevronUp className="w-4 h-4 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 flex-shrink-0" />
                    )}
                  </button>

                  {/* Expandable content for mobile */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-out ${
                      expandedMobile === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <Card className="bg-card border-border p-4 mt-2 rounded-lg border">
                      <p className="text-xs text-muted-foreground leading-relaxed whitespace-pre-line mb-3">
                        {system.description}
                      </p>
                      {index === 0 && (
                        <div className="flex justify-center">
                          <a
                            href="https://daonsewing.blogspot.com/2026/02/blog-post_38.html"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block px-3 py-2 bg-primary text-primary-foreground text-xs font-medium rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            {"적용사례 알아보기"}
                          </a>
                        </div>
                      )}
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Content display (2-column span) - Desktop only */}
          <div className="hidden lg:block lg:col-span-2">
            <Card 
              key={selectedCategory}
              className="bg-card border-border p-6 animate-in fade-in slide-in-from-bottom-4 duration-300"
            >
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
                {automationSystems[selectedCategory].title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed whitespace-pre-line mb-4">
                {automationSystems[selectedCategory].description}
              </p>
              {selectedCategory === 0 && (
                <div className="flex justify-start">
                  <a
                    href="https://daonsewing.blogspot.com/2026/02/blog-post_38.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-primary text-primary-foreground text-xs md:text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {"적용사례 알아보기"}
                  </a>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
