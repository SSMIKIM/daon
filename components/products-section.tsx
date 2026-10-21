"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { ChevronLeft, ChevronRight, X, Play, Link2, Check } from "lucide-react"

interface ProductDetail {
  name: string
  modelName: string
  description: string
  image: string
  youtubeVideoId: string
  detailLink: string
}

function ProductImage({ src, alt }: { src: string; alt: string }) {
  const [loaded, setLoaded] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current?.naturalWidth > 0) {
      setLoaded(true)
    }
  }, [])

  return (
    <div className="relative w-full h-full">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
          <img
            src="/logo.png"
            alt="Loading"
            className="w-10 h-10 object-contain opacity-40"
          />
          <div className="flex items-center gap-1 mt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-[dotBounce_1.2s_ease-in-out_infinite_0s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-[dotBounce_1.2s_ease-in-out_infinite_0.2s]" />
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-[dotBounce_1.2s_ease-in-out_infinite_0.4s]" />
          </div>
        </div>
      )}
      <img
        ref={imgRef}
        src={src || "/placeholder.svg"}
        alt={alt}
        className={`w-full h-full object-cover transition-opacity duration-300 ${loaded ? "opacity-100" : "opacity-0"}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

const productImage = "/product-detail-image.png"

const stitchImages = [
  "/stitch-1.jpg",
  "/stitch-2.jpg",
  "/stitch-3.jpg",
  "/stitch-14.jpg",
  "/stitch-22.jpg",
  "/stitch-6.jpg",
  "/stitch-7.jpg",
  "/stitch-8.jpg",
  "/stitch-11.jpg",
  "/stitch-10.jpg",
  "/stitch-9.jpg",
  "/stitch-12.jpg",
  "/stitch-13.jpg",
  "/stitch-4.jpg",
  "/stitch-15.jpg",
  "/stitch-16.jpg",
  "/stitch-17.jpg",
  "/stitch-18.jpg",
  "/stitch-19.jpg",
  "/stitch-20.jpg",
  "/stitch-21.jpg",
  "/stitch-5.jpg",
]

const sewingBrandImages = [
  "/sewing-brand-1.png",
  "/sewing-brand-2.png",
  "/sewing-brand-3.png",
  "/sewing-brand-4.png",
  "/sewing-brand-5.png",
  "/sewing-brand-6.png",
  "/sewing-brand-7.png",
  "/sewing-brand-8.png",
  "/sewing-brand-9.png",
]

const peripheralProducts = [
  {
    name: "전자 스냅기",
    modelName: "SB-511",
    description: "세이프 가드로 안전하게 사용 가능한 무소음 서보모터 방식의 전자 스냅기입니다. 저희 제품은 한국형 몰드, 세이프가드 100% 호환됩니다",
    image: "/peripheral-1.png",
    detailLink: "https://daonsewing.blogspot.com/2026/02/sb-511.html",
  },
  {
    name: "소형 재단기",
    modelName: "DO-611",
    description: "손에 움켜낄 정도로 작은 사이즈의 재단기입니다. 배터리 교체 방식으로 전기 선이 없어 작업이 매우 편리합니다. 또한 컴팩트한 사이즈로 미세하고 정밀한 재단이 가능합니다",
    image: "/peripheral-2.png",
    detailLink: "https://daonsewing.blogspot.com/2025/12/blog-post.html",
  },
  {
    name: "폴리백 포장기",
    modelName: "LO-2000/PT",
    description: "폴리백 봉투를 제품에 넣어준 뒤 발판을 밟으면 봉투가 자동으로 벌려지게 됩니다. 빠른 속도로 제품을 포장하실 수 있습니다",
    image: "/peripheral-3.jpg",
    detailLink: "https://daonsewing.blogspot.com/2026/02/lo-2000pt.html",
  },
  {
    name: "제사처리기",
    modelName: "LO-TRM2",
    description: "봉제 후 남은 잔사를 흡입한 뒤 칼날이 실을 제거해줍니다. 총 2개의 헤드로 2명이 작업할 수 있습니다",
    image: "/peripheral-4.png",
    detailLink: "https://daonsewing.blogspot.com/2026/02/lo-trm2.html",
  },
  {
    name: "전자 커팅기",
    modelName: "LO-988CU",
    description: "원하는 길이, 수량을 입력하면 자동으로 잘라줍니다. 냉/열 겸용 칼로 다양한 소재를 자를 수 있습니다. 이 외의 다른 모델로는 펀칭+커팅, 다각도 커팅, 열 전용 커팅, 레이저 + 커팅, 로프용 커팅 등등 다양한 모델이 있습니다",
    image: "/peripheral-5.png",
    detailLink: "https://daonsewing.blogspot.com/2026/02/lo-988cu.html",
  },
  {
    name: "전사 프레스",
    modelName: "LE-HPM1-2",
    description: "열을 이용하여 의류에 전사 스티커를 부착하는 제품입니다. 두개의 작업대가 있어 빠른 생산성을 보여줍니다",
    image: "/peripheral-6.png",
    detailLink: "https://daonsewing.blogspot.com/2026/02/le-hpm1-2.html",
  },
  {
    name: "원단 롤링 랙",
    modelName: "LO-538",
    description: "롤링 랙 위에 원단을 올려 보다 쉽게 원단을 풀어주는 장치 입니다",
    image: "/peripheral-7.png",
    detailLink: "https://daonsewing.blogspot.com/2026/02/lo-538.html",
  },
  {
    name: "자동 보빈 와인더",
    modelName: "LEBW-528",
    description: "보빈을 통에 넣어두면 자동으로 공급되어 실을 감아준 뒤 배출 됩니다. 보빈 사이즈마다 기계가 달라지니 도움이 필요하시면 문의 부탁드립니다",
    image: "/peripheral-8.png",
    detailLink: "https://daonsewing.blogspot.com/2026/02/lebw-528.html",
  },
]

const peripheralImages = peripheralProducts.map((p) => p.image)

function MobileCategoryRow({
  catIndex,
  catName,
  hasSubCats,
  subCats,
  getProductsForCategory,
  onProductClick,
  hideNameModel,
}: {
  catIndex: number
  catName: string
  hasSubCats: boolean
  subCats: string[]
  getProductsForCategory: (catIdx: number, subFilter: number | null) => { name: string; modelName: string; image: string }[]
  onProductClick: (name: string, model: string, index: number, catIdx: number) => void
  hideNameModel: boolean
}) {
  const [activeSubFilter, setActiveSubFilter] = useState<number | null>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const subNavRef = useRef<HTMLDivElement>(null)
  const subNavScrollRef = useRef<HTMLDivElement>(null)
  const subBtnRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [pillStyle, setPillStyle] = useState<{ left: number; width: number } | null>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)

  // activeIndex: null => 0 ("전체"), sub idx => idx + 1
  const activeButtonIndex = activeSubFilter === null ? 0 : activeSubFilter + 1

  const updatePillPosition = useCallback(() => {
    const btn = subBtnRefs.current[activeButtonIndex]
    if (btn && subNavRef.current) {
      const navRect = subNavRef.current.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      setPillStyle({
        left: btnRect.left - navRect.left,
        width: btnRect.width,
      })
    }
  }, [activeButtonIndex])

  const checkSubNavScroll = useCallback(() => {
    const el = subNavScrollRef.current
    if (el) {
      setCanScrollLeft(el.scrollLeft > 2)
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
    }
  }, [])

  useEffect(() => {
    updatePillPosition()
    const timer = setTimeout(updatePillPosition, 100)
    const timer2 = setTimeout(updatePillPosition, 300)
    return () => { clearTimeout(timer); clearTimeout(timer2) }
  }, [updatePillPosition])

  useEffect(() => {
    checkSubNavScroll()
    const timer = setTimeout(checkSubNavScroll, 100)
    return () => clearTimeout(timer)
  }, [checkSubNavScroll, hasSubCats])

  const scrollSubNav = (direction: "left" | "right") => {
    const el = subNavScrollRef.current
    if (el) {
      el.scrollBy({ left: direction === "left" ? -100 : 100, behavior: "smooth" })
      setTimeout(checkSubNavScroll, 350)
    }
  }

  const [canScrollRowLeft, setCanScrollRowLeft] = useState(false)
  const [canScrollRowRight, setCanScrollRowRight] = useState(false)

  const checkRowScroll = useCallback(() => {
    const el = scrollRef.current
    if (el) {
      setCanScrollRowLeft(el.scrollLeft > 2)
      setCanScrollRowRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2)
    }
  }, [])

  const scrollRow = (direction: "left" | "right") => {
    const el = scrollRef.current
    if (el) {
      const scrollAmount = el.clientWidth * 0.6
      el.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" })
      setTimeout(checkRowScroll, 350)
    }
  }

  const products = getProductsForCategory(catIndex, activeSubFilter)

  const handleSubClick = (subIdx: number | null) => {
    setActiveSubFilter(subIdx)
    if (scrollRef.current) scrollRef.current.scrollLeft = 0
    setTimeout(checkRowScroll, 100)
  }

  useEffect(() => {
    checkRowScroll()
    const timer = setTimeout(checkRowScroll, 200)
    return () => clearTimeout(timer)
  }, [checkRowScroll, activeSubFilter])

  return (
    <div>
      {/* Title */}
      <div className={hasSubCats ? "mb-1" : "mb-1.5"}>
        <h3 className="text-white font-bold text-base">{catName}</h3>
      </div>

      {/* Sub-category pill nav with embedded arrows */}
      {hasSubCats && (
        <div className="mb-1.5">
          <div className="bg-[#1a1a1a] rounded-full p-1 relative overflow-hidden w-fit max-w-full">
            {/* Scrollable buttons area - takes full width */}
            <div
              ref={subNavScrollRef}
              onScroll={checkSubNavScroll}
              className="overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <div
                ref={subNavRef}
                className="flex w-fit relative"
              >
                <div
                  className={`absolute top-0 bottom-0 bg-white rounded-full transition-all duration-300 ease-out ${pillStyle === null ? "opacity-0" : "opacity-100"}`}
                  style={{
                    left: pillStyle?.left ?? 0,
                    width: pillStyle?.width ?? 0,
                  }}
                />
                <button
                  ref={(el) => {
                    subBtnRefs.current[0] = el
                    if (el && pillStyle === null) {
                      requestAnimationFrame(() => updatePillPosition())
                    }
                  }}
                  onClick={() => handleSubClick(null)}
                  className={`relative px-3 py-1 rounded-full text-xs font-medium z-10 transition-colors duration-300 flex-shrink-0 ${
                    activeSubFilter === null ? "text-black" : "text-white/70"
                  }`}
                >
                  전체
                </button>
                {subCats.map((sub, idx) => (
                  <button
                    key={idx}
                    ref={(el) => { subBtnRefs.current[idx + 1] = el }}
                    onClick={() => handleSubClick(idx)}
                    className={`relative px-3 py-1 rounded-full text-xs font-medium z-10 transition-colors duration-300 flex-shrink-0 ${
                      activeSubFilter === idx ? "text-black" : "text-white/70"
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>

            {/* Left arrow - overlays on top */}
            <button
              onClick={() => scrollSubNav("left")}
              className={`absolute left-0 top-0 bottom-0 w-8 flex items-center justify-center bg-[#1a1a1a] rounded-l-full z-20 transition-opacity duration-200 ${
                canScrollLeft ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-3.5 h-3.5 text-white/70" />
            </button>

            {/* Right arrow - overlays on top */}
            <button
              onClick={() => scrollSubNav("right")}
              className={`absolute right-0 top-0 bottom-0 w-8 flex items-center justify-center bg-[#1a1a1a] rounded-r-full z-20 transition-opacity duration-200 ${
                canScrollRight ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-label="Scroll right"
            >
              <ChevronRight className="w-3.5 h-3.5 text-white/70" />
            </button>
          </div>
        </div>
      )}

      {/* Horizontal scroll row with desktop arrows */}
      <div className="relative group/row">
        {/* Left arrow - desktop only */}
        {canScrollRowLeft && (
          <button
            onClick={() => scrollRow("left")}
            className="hidden lg:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-black rounded-full shadow-lg opacity-0 group-hover/row:opacity-100 transition-opacity duration-200 cursor-pointer"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
        )}

        <div
          ref={scrollRef}
          onScroll={checkRowScroll}
          className="flex gap-2 overflow-x-auto scrollbar-hide"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {products.map((product, index) => (
            <div
              key={`${catIndex}-${activeSubFilter}-${index}`}
              className="w-[65%] md:w-[45%] lg:w-[24%] flex-shrink-0 cursor-pointer"
              onClick={() => onProductClick(product.name, product.modelName, index, catIndex)}
            >
              <div className="rounded-lg overflow-hidden">
                <div className="bg-white aspect-[4/3]">
                  <ProductImage src={product.image} alt={`${product.name} ${product.modelName}`} />
                </div>
                {!hideNameModel && (
                  <div className={`bg-[#e8e8e8] px-2.5 py-1.5 ${product.modelName ? "" : "flex items-center min-h-[38px]"}`}>
                    {product.modelName ? (
                      <>
                        <h4 className="text-[#222] font-medium text-xs truncate leading-none">{product.name}</h4>
                        <span className="text-[#666] text-[10px] leading-none block mt-0.5">{product.modelName}</span>
                      </>
                    ) : (
                      <h4 className="text-[#222] font-medium text-xs truncate leading-none">{product.name}</h4>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow - desktop only */}
        {canScrollRowRight && (
          <button
            onClick={() => scrollRow("right")}
            className="hidden lg:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 w-9 h-9 items-center justify-center bg-black rounded-full shadow-lg opacity-0 group-hover/row:opacity-100 transition-opacity duration-200 cursor-pointer"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        )}
      </div>
    </div>
  )
}

function MobilePillNav({
  items,
  selectedIndex,
  onSelect,
  hasSubIndicator,
  align = "center",
}: {
  items: string[]
  selectedIndex: number
  onSelect: (index: number) => void
  hasSubIndicator?: (index: number) => boolean
  align?: "center" | "left"
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(false)
  const [pillStyle, setPillStyle] = useState({ left: 0, width: 0 })

  const checkOverflow = () => {
    const el = scrollRef.current
    if (!el) return
    setShowLeftArrow(el.scrollLeft > 4)
    setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }

  const updatePill = () => {
    const btn = itemRefs.current[selectedIndex]
    const container = scrollRef.current
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
    checkOverflow()
    updatePill()
    const el = scrollRef.current
    if (el) {
      el.addEventListener("scroll", checkOverflow)
      return () => el.removeEventListener("scroll", checkOverflow)
    }
  }, [items])

  useEffect(() => {
    updatePill()
    // Scroll the selected button into center view
    const btn = itemRefs.current[selectedIndex]
    const container = scrollRef.current
    if (btn && container) {
      const containerRect = container.getBoundingClientRect()
      const btnRect = btn.getBoundingClientRect()
      const scrollLeft =
        btnRect.left - containerRect.left + container.scrollLeft - containerRect.width / 2 + btnRect.width / 2
      container.scrollTo({ left: scrollLeft, behavior: "smooth" })
    }
  }, [selectedIndex])

  const scrollBy = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 120, behavior: "smooth" })
  }

  return (
    <div className={`relative w-full flex items-center ${align === "left" ? "justify-start" : "justify-center"}`}>
      {showLeftArrow && (
        <button
          onClick={() => scrollBy(-1)}
          className="absolute left-0 z-20 bg-[#111] border border-white/20 rounded-full p-1.5 text-white shadow-lg hover:bg-[#222] transition-colors"
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
      )}
      <div
        ref={scrollRef}
        className="overflow-x-auto scrollbar-hide bg-[#1a1a1a] rounded-full p-1 relative flex"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {/* Sliding white pill indicator */}
        <div
          className="absolute top-1 bottom-1 bg-white rounded-full transition-all duration-300 ease-out"
          style={{ left: pillStyle.left, width: pillStyle.width }}
        />
        {items.map((item, index) => (
          <button
            key={index}
            ref={(el) => { itemRefs.current[index] = el }}
            onClick={() => onSelect(index)}
            className={`
              relative px-4 py-1.5 rounded-full text-xs font-medium z-10 whitespace-nowrap flex-shrink-0
              transition-colors duration-300
              ${selectedIndex === index ? "text-black" : "text-white/70"}
            `}
          >
            <span className="flex items-center gap-1">
              {item}
              {hasSubIndicator?.(index) && (
                <span className={`w-1 h-1 rounded-full ${selectedIndex === index ? "bg-black/40" : "bg-white/50"}`} />
              )}
            </span>
          </button>
        ))}
      </div>
      {showRightArrow && (
        <button
          onClick={() => scrollBy(1)}
          className="absolute right-0 z-20 bg-[#111] border border-white/20 rounded-full p-1.5 text-white shadow-lg hover:bg-[#222] transition-colors"
          aria-label="Scroll right"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}
    </div>
  )
}

export function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState<ProductDetail | null>(null)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [isCopied, setIsCopied] = useState(false)
  const categories = [
    "자동화 재봉기",
    "자동 재단기",
    "자동 의류 포장기",
    "컴퓨터 패턴 재봉기",
    "특수 스티치",
    "컴퓨터 자수기",
    "일반 재봉기",
    "주변 기기",
  ]

  const subCategories: Record<number, string[]> = {
    1: ["CAD/CAM 재단기", "샘플 재단기", "레이저 재단기", "프레스 재단기", "슬리터"],
    2: ["일체형", "모듈형"],
    5: ["싱글 헤드", "멀티 헤드", "추가장치"],
  }

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const imageScrollRef = useRef<HTMLDivElement>(null)

  const [selectedCategory, setSelectedCategory] = useState(0)
  const [selectedSubCategory, setSelectedSubCategory] = useState(0)
  const [showSubCategories, setShowSubCategories] = useState(false)
  const [showMobileSubCategories, setShowMobileSubCategories] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [backgroundStyle, setBackgroundStyle] = useState({ left: 0, width: 0 })
  const categoryButtonsRef = useRef<(HTMLButtonElement | null)[]>([])
  const categoryScrollRef = useRef<HTMLDivElement>(null)

  // 자동화 재봉기 제품 데이터
  const automationProducts = [
    {
      name: "자동 웨빙 재봉기",
      modelName: "DA-3020SCFS",
      description: "백팩에서 가방끈과 가방을 이어주는 부분에 세모난 모양으로 들어가는 웨빙 봉제입니다. 자재 공급 - 초음파 재단 - 폴딩 - 이송 - 봉제로 이루어진 구성으로 사람없이 무인으로 작동 됩니다.",
      image: "/automation-machine-1.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-3020scfs.html",
    },
    {
      name: "자동 헤밍 벨트식 재봉기",
      modelName: "DA-4000VAHS",
      description: "작업자가 원단을 공급하면 이송 벨트를 따라 자동으로 봉제가 됩니다. 해당 제품은 삼봉, 상하송, 본봉, 오버록 등등으로 헤드 교체가 가능합니다. 직선으로 봉제하는 경우에 사용하는 제품입니다. 중간 커팅은 옵션입니다.",
      image: "/automation-machine-2.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-4000vahs.html",
    },
    {
      name: "자동 헤밍 재봉기",
      modelName: "DA-2700-CA",
      description: "자동 밑단 말이기 입니다. 티셔츠 밑단을 자동으로 말아준 뒤 봉제를 해줄때 주로 많이 사용하며, 우메스로 헤드를 교체하여 속옷 작업도 가능합니다",
      image: "/automation-machine-3.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-2700-ca.html",
    },
    {
      name: "자동 양면 오버록 재봉기",
      modelName: "DA-5812",
      description: "우수형/좌수형 오버록이 좌/우에 배치 되어 있어 동시에 양면을 봉제해주는 재봉기 입니다. 무인으로 작동하며, 주로 극세사 타올 제작 업체에서 많이 사용하는 재봉기 입니다",
      image: "/automation-machine-4.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-5812.html",
    },
    {
      name: "자동 상하 오버록 재봉기",
      modelName: "DA-5813",
      description: "5812에서 나온 원단을 공급하면 이송 - 재단 - 이송 - 상/하 봉제 - 라벨 공급 - 초음파 실 제거 - 이송 - 마무리로 이루어진 공정입니다. 무인으로 작동하며, 한면에 2대씩 총 4대로 이루어져 2개씩 생산되는 재봉기 입니다",
      image: "/automation-machine-5.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-5813_15.html",
    },
    {
      name: "자동 밴드 이음기",
      modelName: "DA-1900ABS",
      description: "고무밴드를 아이롱 한 뒤 설정한 길이만큼 잘라준 뒤 (초음파 재단) 양 끝을 포개어 원형으로 만들어 준 뒤 재봉기가 봉제를 해줍니다. 주로 츄리닝에 들어가는 밴드를 제작할 때 사용합니다",
      image: "/automation-machine-6.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-4100-311.html",
    },
    {
      name: "자동 주머니 달이기",
      modelName: "DA-4100-311",
      description: "바지 뒷판 주머니 봉제를 자동으로 해주는 재봉기로 기존에는 아이롱, 쌍침 봉제, 바택 봉제를 수동으로 하였습니다. 해당 재봉기로는 이러한 과정없이 다이렉트로 한번에 작업이 가능합니다. 바지용, 셔츠용, 다이마루용 총 3가지 모델이 있습니다. 또한 저희 제품은 누구나 쉽게 프레임 교체를 할 수 있도록 설계 되었습니다",
      image: "/automation-machine-7.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-3020afs.html",
    },
    {
      name: "자동 공급 재봉기",
      modelName: "DA-3020AFS",
      description: "롤 형태의 원단을 걸어주면 자동으로 이송을 해주며 봉제를 해줍니다",
      image: "/automation-machine-8.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-6040afhs.html",
    },
    {
      name: "자동 공급 열선 재봉기",
      modelName: "DA-6040AFHS",
      description: "롤 형태의 원단에 자동으로 열선을 봉제해주는 재봉기 입니다. 작업이 끊이지 않고 작동하여 X축은 원하는 길이만큼 작업이 가능합니다.",
      image: "/automation-machine-9.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/da-6040afhs.html",
    },
  ]

  // 자동 재단기 제품 데이터 (서브카테고리별)
  const cuttingProducts: Record<number, { name: string; modelName: string; description: string; image: string; detailLink?: string }[]> = {
    0: [
      {
        name: "CAD/CAM 재단기",
        modelName: "KAWAKAMI GP Series",
        description: "자동 연단기와 함께 사용해야 최대의 효율로 사용할 수 있는 재단기로 여러겹을 쌓아 베큐 후 여러겹을 동시에 컴퓨터 재단해주는 재단기 입니다",
        image: "/cutting-machine-1.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/cadcam-kawakami-gp-series.html",
      },
    ],
    1: [
      {
        name: "샘플 재단기",
        modelName: "LEC Series",
        description: "한장씩 커팅하며, 비닐을 덮으면 여러장을 동시에 커팅해줄 수 있는 재단기 입니다. 샘플 재단기는 다양한 헤드 팁이 있어 스티커, 나무, CNC, 원단 등등 다양한 소재를 재단할 수 있습니다. 또한 Y축은 자동 이송, 수동 이송 선택 가능하며, 재단기의 작업 반경에 따라 금액이 달라집니다.",
        image: "/cutting-machine-2.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/lec-series.html",
      },
    ],
    2: [
      {
        name: "레이저 재단기",
        modelName: "DRC Series",
        description: "1헤드, 2헤드 / Y축 자동 이송, 수동 이송 / 작업 반경 / 출력에 따라 모델이 달라집니다.",
        image: "/cutting-machine-3.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/drc-series.html",
      },
    ],
    3: [
      {
        name: "프레스 재단기",
        modelName: "DPC Series",
        description: "프레스 방식의 재단으로 원단을 넣고, 위에 철형을 두어 프레스가 누르면 재단되는 방식입니다. 작업 반경과 톤수에 따라 모델이 달라집니다",
        image: "/cutting-machine-4.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/dpc-series.html",
      },
    ],
    4: [
      {
        name: "슬리터",
        modelName: "DSL Series",
        description: "롤 형태의 원단을 원하는 폭으로 정밀하게 슬리팅(재단)하는 장비입니다. 다양한 원단 소재에 대응하며, 폭 조절이 자유롭고 고속 작업이 가능합니다.",
        image: "/cutting-machine-5.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/dsl-series.html",
      },
    ],
  }

  // 자동 의류 포장기 제품 데이터 (서브카테고리별)
  const packagingProducts: Record<number, { name: string; modelName: string; description: string; image: string; detailLink?: string }[]> = {
    0: [
      {
        name: "소형",
        modelName: "RMTD-2301",
        description: "컴팩트한 자동의류포장기로 의류 폴딩후 아래로 떨어진 후 폴리백에 넣어 이송 해줍니다. 마무리는 폴리백 테이프를 떼어 붙여주는 작업까지 해줍니다.",
        image: "/packaging-1.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/rmtd-2301.html",
      },
      {
        name: "박물용 일체형",
        modelName: "RMTD-4602S",
        description: "박물용과 후물용은 처음 폴딩 방식에 차이가 있습니다. 박물용은 밀어서 옷을 개어주는 방식이고, 후물용은 접어서 개어주는 방식입니다. 마무리는 열 봉합, 테이브 제거, 옵션 X 총 3가지로 나뉩니다",
        image: "/packaging-2.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/rmtd-4602s.html",
      },
      {
        name: "후물용 일체형",
        modelName: "RMTD-5602S",
        description: "박물용과 후물용은 처음 폴딩 방식에 차이가 있습니다. 박물용은 밀어서 옷을 개어주는 방식이고, 후물용은 접어서 개어주는 방식입니다. 마무리는 열 봉합, 테이프 제거, 옵션 X 총 3가지로 나뉩니다",
        image: "/packaging-3.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/rmtd-4602s.html",
      },
    ],
    1: [
      {
        name: "폴딩 부분",
        modelName: "PMTD-5201JYDJ",
        description: "일체형과 마찬가지로 접어주는 부분 박물용, 후물용이 있고, 의류지 or 등대지 공급, 바지 전용 이렇게 총 4가지의 모델이 있습니다",
        image: "/packaging-4.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "폴리백 부분",
        modelName: "RMTD-RDX01",
        description: "일반 폴리백, 지퍼 폴리백 총 2가지의 모델이 있습니다",
        image: "/packaging-5.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "폴리백 테이프 봉합",
        modelName: "RMTD-SF01",
        description: "테이프 위 비닐을 제거 후 폴리백을 접어서 붙여주는 기능입니다",
        image: "/packaging-6.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "폴리백 스티커 봉합",
        modelName: "RMTD-TJ01",
        description: "의류가 들어간 폴리백의 남은 부분을 접어서 그 위에 스카치 테이프를 붙여지는 기능입니다",
        image: "/packaging-7.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "폴리백 열 봉합",
        modelName: "RMTD-RF01",
        description: "폴리백 마무리를 열 봉합으로 마무리 해주는 기능입니다",
        image: "/packaging-8.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "종이 포장 장치",
        modelName: "RMTD-HBZ03",
        description: "폴딩 된 의류가 이송하는 과정에서 종이가 의류를 감싸주는 기능입니다",
        image: "/packaging-9.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "다층 적재 장치",
        modelName: "RMTD-DZ",
        description: "폴딩된 옷을 여러층으로 적층할 수 있는 기능입니다.",
        image: "/packaging-10.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "사이즈 라벨 부착기",
        modelName: "RMTD-TB01",
        description: "긴 사이즈의 라벨을 의류에 붙여주는 기능입니다. 예시로 유니클로 매장에서 볼 수 있는 긴 사이즈의 라벨 입니다",
        image: "/packaging-11.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "바코드 스티커 부착기",
        modelName: "RMTD-TB03",
        description: "인쇄된 라벨을 자동으로 부착해주는 기능입니다",
        image: "/packaging-12.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "자동 바코드 스티커 부착기",
        modelName: "RMTD-TB04",
        description: "바코드를 실시간으로 인쇄하며 부착해주는 방식입니다.",
        image: "/packaging-13.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "자동 회전 장치",
        modelName: "RMTD-FZ01",
        description: "포장된 의류를 자동으로 뒤집어 (앞면, 뒷면)주는 기능입니다",
        image: "/packaging-14.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "자동 플립 장치",
        modelName: "RMTD-LX02",
        description: "폴리백 포장까지 완성된 제품을 센서가 감지하여 하나씩 넘겨주는 기능입니다",
        image: "/packaging-15.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
      {
        name: "자동 개폐 장치",
        modelName: "RMTD-LX01",
        description: "폴리백 포장까지 완성된 제품을 센서가 감지하여 자동으로 문을 열어주는 장치로 제품이 아래로 떨어지게 됩니다",
        image: "/packaging-16.png",
        detailLink: "https://daonsewing.blogspot.com/2026/02/pmtd-5201jydj.html",
      },
    ],
  }

  // 자동화 재봉기 이미지 (파일 번호 = 모델 번호 순서)
  const automationMachineImages = automationProducts.map((p) => p.image)

  // 컴퓨터 패턴 재봉기 제품 데이터
  const patternProducts = [
    {
      name: "컴퓨터 패턴 재봉기",
      modelName: "DO-3020",
      description: "CAD기반으로 프로그래밍 하여 입력한 모양으로 봉제를 해주는 재봉기 입니다",
      image: "/pattern-machine-1.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/do-3020.html",
    },
    {
      name: "헤드상승 패턴 재봉기",
      modelName: "DO-3020-SHU",
      description: "재봉기 헤드를 개조하여 높이 올랐다 내렸다 하며 봉제가 됩니다. 배게, 방석, 쿠션에 많이 사용됩니다",
      image: "/pattern-machine-2.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/do-3020-shu.html",
    },
    {
      name: "극 후물용 패턴 재봉기",
      modelName: "DO-2010-TNU",
      description: "고추북 가마로 제작된 재봉기로 굉장히 두꺼운 원단, 두꺼운 실을 봉제할 수 있습니다. 주로 건설 현장에 쓰이는 부자재 봉제를 할 때 많이 사용됩니다",
      image: "/pattern-machine-3.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/do-2010-tnu.html",
    },
    {
      name: "소통 패턴 재봉기",
      modelName: "DO-2616-SCB",
      description: "기존의 넓은 침판이 아닌 가마 크기만큼 소폭의 통으로 제작된 재봉기 입니다. 제품을 넣을수 있는 공간이 매우 작아 다양한 작업에 사용됩니다. (양말, 무릎 보호대, 완성 의류 로고 봉제, 가방 등등)",
      image: "/pattern-machine-4.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/do-2616-scb.html",
    },
    {
      name: "칼 재단 + 패턴 재봉기",
      modelName: "DO-3020-KCU",
      description: "헤드 좌측에 진동칼이 달려있어 봉제와 재단을 동시에 해줄 수 있는 재봉기 입니다. 주로 앞마이 작업에 많이 사용됩니다",
      image: "/pattern-machine-5.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/do-3020-kcu.html",
    },
    {
      name: "펀칭 + 패턴 재봉기",
      modelName: "DO-3020-PU",
      description: "헤드 좌측에 펀칭기가 달려있어 봉제와 펀칭을 동시에 해줄 수 있는 재봉기 입니다. 주로 신발 작업에 많이 사용됩니다",
      image: "/pattern-machine-6.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/do-3020-pu.html",
    },
    {
      name: "레이저 + 패턴 재봉기",
      modelName: "DO-3520-LCU",
      description: "헤드 좌측에 펀칭기가 달려있어 봉제와 레이저 재단을 동시에 해줄 수 있는 재봉기 입니다. 주로 구찌 작업에 많이 사용 됩니다",
      image: "/pattern-machine-7.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/do-3520-lcu.html",
    },
    {
      name: "커튼 전용 패턴 재봉기",
      modelName: "DO-3020G-CL",
      description: "헤드 우측에 커튼용 디바이스가 달려있어 커튼 주름 봉제시 일정한 간격으로 봉제할 수 있게 도와줍니다",
      image: "/pattern-machine-8.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/do-3020g-cl.html",
    },
  ]

  // 컴퓨터 자수기 싱글 헤드 제품 데이터
  const embroiderySingleHeadProducts = [
    {
      name: "싱글 헤드",
      modelName: "LE-1201",
      description: "고품질 산업용 컴퓨터 자수기로, 정밀한 자수 작업과 높은 내구성을 자랑합니다. 최신 기술이 적용되어 생산성을 극대화하며, 다양한 소재에 적합한 맞춤형 솔루션을 제공합니다.",
      image: "/embroidery-single-1.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post.html",
    },
  ]

  // 컴퓨터 자수기 멀티 헤드 제품 데이터
  const embroideryMultiHeadProducts = [
    {
      name: "멀티 헤드",
      modelName: "LE-1204",
      description: "고품질 산업용 컴퓨터 자수기로, 정밀한 자수 작업과 높은 내구성을 자랑합니다. 최신 기술이 적용되어 생산성을 극대화하며, 다양한 소재에 적합한 맞춤형 솔루션을 제공합니다.",
      image: "/embroidery-multi-1.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_15.html",
    },
    {
      name: "멀티 헤드",
      modelName: "LE-1208",
      description: "고품질 산업용 컴퓨터 자수기로, 정밀한 자수 작업과 높은 내구성을 자랑합니다. 최신 기술이 적용되어 생산성을 극대화하며, 다양한 소재에 적합한 맞춤형 솔루션을 제공합니다.",
      image: "/embroidery-multi-2.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_15.html",
    },
  ]

  // 컴퓨터 자수기 추가장치 제품 데이터
  const embroideryAccessoryProducts = [
    {
      name: "비드 장치",
      modelName: "",
      description: "옷감에 작은 구슬(비드)을 자동으로 달아주는 장치입니다",
      image: "/embroidery-acc-bead.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_75.html",
    },
    {
      name: "스팽글 장치",
      modelName: "",
      description: "반짝이는 얇은 조각인 스팽글을 자수와 함께 박을 수 있게 해줍니다",
      image: "/embroidery-acc-sequin.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_75.html",
    },
    {
      name: "easy 니들/셔닐 장치",
      modelName: "",
      description: "보풀 느낌의 실(셔닐) 자수를 쉽게 구현할 수 있도록 돕는 장치입니다",
      image: "/embroidery-acc-chenille.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_75.html",
    },
    {
      name: "레이저 커팅 장치",
      modelName: "",
      description: "자수 작업 완료 후 테두리 부분을 정교하게 레이저로 재단을 해줍니다. 와펜, 명찰 같은 작업에 많이 사용됩니다",
      image: "/embroidery-acc-laser.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_75.html",
    },
    {
      name: "easy 코딩 장치",
      modelName: "",
      description: "끈이나 로프 형태의 굵은 실을 자수 위에 고정시켜 입체감을 주는 장치입니다",
      image: "/embroidery-acc-cording.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_75.html",
    },
    {
      name: "보링 나이프/펀칭 칼",
      modelName: "",
      description: "원단에 구멍을 뚫어주는 장치입니다. 주로 아일렛 작업에 사용됩니다",
      image: "/embroidery-acc-boring.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_75.html",
    },
    {
      name: "비전 시스템",
      modelName: "",
      description: "카메라를 통해 자수 위치를 정밀하게 인식하고 보정하는 시스템입니다",
      image: "/embroidery-acc-vision.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_75.html",
    },
    {
      name: "빔 프로젝트 시스템",
      modelName: "",
      description: "원단 위에 자수될 모양을 미리 빔으로 쏘아 보여주어 위치를 정확히 잡도록 돕는 장치입니다",
      image: "/embroidery-acc-beam.png",
      detailLink: "https://daonsewing.blogspot.com/2026/02/blog-post_75.html",
    },
  ]

  // 컴퓨터 패턴 재봉기 이미지 (파일 번호 = 모델 번호 순서)
  const patternMachineImages = patternProducts.map((p) => p.image)

  const getSubCategoryImages = (categoryIndex: number) => {
    if (categoryIndex === 1) {
      return subCategories[categoryIndex]?.map((_, subIndex) => {
        return cuttingProducts[subIndex]?.map((p) => p.image) || [productImage]
      })
    }
    if (categoryIndex === 2) {
      return subCategories[categoryIndex]?.map((_, subIndex) => {
        return packagingProducts[subIndex]?.map((p) => p.image) || [productImage]
      })
    }
    if (categoryIndex === 5) {
      // 컴퓨터 자수기: 싱글 헤드, 멀티 헤드, 추가장치
      return [
        ["/embroidery-single-1.png"],
        ["/embroidery-multi-1.png", "/embroidery-multi-2.png"],
        embroideryAccessoryProducts.map((p) => p.image),
      ]
    }
    return subCategories[categoryIndex]?.map(() => [productImage])
  }

  // 하위 카테고리가 있는 경우 해당 하위 카테고리들의 이미지 합계를 반환
  const getCategoryImageCount = (catIndex: number) => {
    if (subCategories[catIndex]) {
      const subCatImages = getSubCategoryImages(catIndex)
      if (subCatImages) {
        return subCatImages.reduce((total, images) => total + images.length, 0)
      }
    }
    // 자동화 재봉기는 9개
    if (catIndex === 0) return automationMachineImages.length
    // 컴퓨터 패턴 재봉기는 8개
    if (catIndex === 3) return patternMachineImages.length
    // 특수 스티치는 stitchImages 배열 길이 사용
    if (catIndex === 4) return stitchImages.length
    // 하위 카테고리가 없는 경우 기본 9개
    return 9
  }

  const categoryImages = categories.map((_, catIndex) => {
    // 자동화 재봉기는 실제 이미지 배열 사용
    if (catIndex === 0) return automationMachineImages
    // 자동 재단기는 모든 서브카테고리 이미지를 합쳐서 사용
    if (catIndex === 1) {
      const allCuttingImages: string[] = []
      const subCatImages = getSubCategoryImages(1)
      if (subCatImages) {
        for (const imgs of subCatImages) {
          allCuttingImages.push(...imgs)
        }
      }
      return allCuttingImages.length > 0 ? allCuttingImages : [productImage]
    }
    // 자동 의류 포장기는 모든 서브카테고리 이미지를 합쳐서 사용
    if (catIndex === 2) {
      const allPackagingImages: string[] = []
      const subCatImages = getSubCategoryImages(2)
      if (subCatImages) {
        for (const imgs of subCatImages) {
          allPackagingImages.push(...imgs)
        }
      }
      return allPackagingImages.length > 0 ? allPackagingImages : [productImage]
    }
    // 컴퓨터 패턴 재봉기는 실제 이미지 배열 사용
    if (catIndex === 3) return patternMachineImages
    // 특수 스티치는 실제 이미지 배열 사용
    if (catIndex === 4) return stitchImages
    // 일반 재봉기는 실제 이미지 배열 사용
    if (catIndex === 6) return sewingBrandImages
    // 주변 기기는 실제 이미지 배열 사용
    if (catIndex === 7) return peripheralImages
    return Array.from({ length: getCategoryImageCount(catIndex) }, () => productImage)
  })

  const allImages =
    (showSubCategories || showMobileSubCategories) && subCategories[selectedCategory]
      ? getSubCategoryImages(selectedCategory)?.[selectedSubCategory] || []
      : categoryImages[selectedCategory]

  // Mobile: "전체" shows all images, specific sub shows filtered
  const allMobileImages =
    showMobileSubCategories && subCategories[selectedCategory]
      ? getSubCategoryImages(selectedCategory)?.[selectedSubCategory] || []
      : categoryImages[selectedCategory]

  const imagesPerPage = showSubCategories && subCategories[selectedCategory] ? 6 : 9
  const totalPages = Math.ceil(allImages.length / imagesPerPage)
  const currentImages = allImages.slice(currentPage * imagesPerPage, (currentPage + 1) * imagesPerPage)

  const updateBackgroundPosition = () => {
    const selectedButton = categoryButtonsRef.current[selectedCategory]
    const container = categoryScrollRef.current
    if (selectedButton && container) {
      const containerRect = container.getBoundingClientRect()
      const buttonRect = selectedButton.getBoundingClientRect()
      setBackgroundStyle({
        left: buttonRect.left - containerRect.left + container.scrollLeft,
        width: buttonRect.width,
      })
    }
  }

  useEffect(() => {
    updateBackgroundPosition()
    window.addEventListener("resize", updateBackgroundPosition)
    return () => window.removeEventListener("resize", updateBackgroundPosition)
  }, [selectedCategory, showMobileSubCategories])

  // Preload images on category/subcategory change
  useEffect(() => {
    setImagesLoaded(false)
    const images =
      (showSubCategories || showMobileSubCategories) && subCategories[selectedCategory]
        ? getSubCategoryImages(selectedCategory)?.[selectedSubCategory] || []
        : categoryImages[selectedCategory]
    if (!images || images.length === 0) {
      setImagesLoaded(true)
      return
    }
    let loadedCount = 0
    const totalImages = images.length
    images.forEach((src) => {
      const img = new window.Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        loadedCount++
        if (loadedCount >= totalImages) setImagesLoaded(true)
      }
      img.onerror = () => {
        loadedCount++
        if (loadedCount >= totalImages) setImagesLoaded(true)
      }
      img.src = src
    })
  }, [selectedCategory, selectedSubCategory, showSubCategories, showMobileSubCategories])

  // Lock scroll when product detail modal is open
  useEffect(() => {
    if (selectedProduct) {
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = "unset"
      }
    }
  }, [selectedProduct])

  const nextImage = () => {
    if (imageScrollRef.current) {
      const containerWidth = imageScrollRef.current.clientWidth
      imageScrollRef.current.scrollBy({
        left: containerWidth,
        behavior: "smooth",
      })
    }
  }

  const prevImage = () => {
    if (imageScrollRef.current) {
      const containerWidth = imageScrollRef.current.clientWidth
      imageScrollRef.current.scrollBy({
        left: -containerWidth,
        behavior: "smooth",
      })
    }
  }

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleCategoryChange = (index: number) => {
    const scrollToCategory = () => {
      const selectedButton = categoryButtonsRef.current[index]
      const container = categoryScrollRef.current
      if (selectedButton && container) {
        const containerRect = container.getBoundingClientRect()
        const buttonRect = selectedButton.getBoundingClientRect()
        const scrollLeft =
          buttonRect.left - containerRect.left + container.scrollLeft - containerRect.width / 2 + buttonRect.width / 2

        container.scrollTo({
          left: scrollLeft,
          behavior: "smooth",
        })
      }
    }

    if (subCategories[index]) {
      setSelectedCategory(index)
      // Desktop uses sub-category mode, mobile defaults to "전체"
      setShowSubCategories(true)
      setShowMobileSubCategories(false)
      setSelectedSubCategory(0)
      setCurrentImageIndex(0)
      setCurrentPage(0)
      if (imageScrollRef.current) {
        imageScrollRef.current.scrollLeft = 0
      }
      setTimeout(scrollToCategory, 50)
    } else {
      setSelectedCategory(index)
      setShowSubCategories(false)
      setShowMobileSubCategories(false)
      setCurrentImageIndex(0)
      setCurrentPage(0)
      if (imageScrollRef.current) {
        imageScrollRef.current.scrollLeft = 0
      }
      setTimeout(scrollToCategory, 50)
    }
  }

  const handleMobileSubCategoryChange = (index: number) => {
    setSelectedSubCategory(index)
    setCurrentImageIndex(0)
    setCurrentPage(0)
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollLeft = 0
    }
  }

  const handleSubCategoryChange = (index: number) => {
    setSelectedSubCategory(index)
    setCurrentImageIndex(0)
    setCurrentPage(0)
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollLeft = 0
    }
  }

  const handleBackToCategories = () => {
    setShowSubCategories(false)
    setShowMobileSubCategories(false)
    setSelectedSubCategory(0)
    setCurrentImageIndex(0)
    setCurrentPage(0)
    if (imageScrollRef.current) {
      imageScrollRef.current.scrollLeft = 0
    }
    setTimeout(() => {
      updateBackgroundPosition()
    }, 0)
  }

  const handleProductClick = (productName: string, modelName: string, actualIndex?: number, catIdx?: number) => {
    const cat = catIdx ?? selectedCategory
    // 일반 재봉기는 상세페이지 없이 바로 스마트스토어로 이동
    if (cat === 6) {
      window.open("https://smartstore.naver.com/sewingdaon", "_blank", "noopener,noreferrer")
      return
    }
    // 자동화 재봉기 카테고리인 경우 상세 데이터 사용
    if (cat === 0 && actualIndex !== undefined && automationProducts[actualIndex]) {
      const product = automationProducts[actualIndex]
      const videoIds = [
        "rI5cIoI-tMU", // DA-3020SCFS
        "X8921QFUxHo", // DA-4000VAHS
        "X8921QFUxHo", // DA-2700-CA
        "NmdrC0UYse0", // DA-5812
        "gghKy5hvqXQ", // DA-5813
        "2x-MbR1ogdo", // DA-1900ABS
        "jaGRGGq7yJQ", // DA-4100-311
        "9hpp2xdLJew", // DA-3020AFS
        "ynE-j4aCcwY", // DA-6040AFHS
      ]
      setSelectedProduct({
        name: product.name,
        modelName: product.modelName,
        description: product.description,
        image: product.image,
        youtubeVideoId: videoIds[actualIndex] || "qYCkghfJIx4",
        detailLink: product.detailLink,
      })
    } else if (cat === 1) {
      // Try to find from product name/model matching
      let product = null
      for (const subProds of Object.values(cuttingProducts)) {
        const found = subProds.find(p => p.name === productName)
        if (found) { product = found; break }
      }
      
      // 자동 재단기 제품별 영상 ID
      const cuttingVideoIds: Record<string, string> = {
        "KAWAKAMI GP Series": "qYCkghfJIx4", // 유지
        "LEC Series": "K9d_E9huZsE",
        "DRC Series": "e5m7lzegv00",
        "DPC Series": "HLuXtzx68Ec",
        "DSL Series": "f_Z2wWevzRc",
      }
      
      if (product) {
        setSelectedProduct({
          name: product.name,
          modelName: product.modelName,
          description: product.description,
          image: product.image,
          youtubeVideoId: cuttingVideoIds[product.modelName] || "qYCkghfJIx4",
          detailLink: product.detailLink || "#",
        })
      } else {
        setSelectedProduct({
          name: productName,
          modelName: modelName,
          description: "고품질 산업용 장비로, 정밀한 작업과 높은 내구성을 자랑합니다.",
          image: "/product-detail-image.png",
          youtubeVideoId: cuttingVideoIds[modelName] || "qYCkghfJIx4",
          detailLink: "#",
        })
      }
    } else if (cat === 2) {
      let product = null
      for (const subProds of Object.values(packagingProducts)) {
        const found = subProds.find(p => p.name === productName)
        if (found) { product = found; break }
      }
      
      // 자동의류 포장기 제품별 영상 ID
      const packagingVideoIds: Record<string, string> = {
        "RMTD-2301": "7R2MTAWX3vE",
        "RMTD-4602S": "FWMSZeeclSo",
        "RMTD-5602S": "FWMSZeeclSo",
        "PMTD-5201JYDJ": "agyolz_4prY",
        "RMTD-RDX01": "agyolz_4prY",
        "RMTD-SF01": "agyolz_4prY",
        "RMTD-TJ01": "agyolz_4prY",
        "RMTD-RF01": "agyolz_4prY",
        "RMTD-HBZ03": "agyolz_4prY",
        "RMTD-DZ": "agyolz_4prY",
        "RMTD-TB01": "agyolz_4prY",
        "RMTD-TB03": "agyolz_4prY",
        "RMTD-TB04": "agyolz_4prY",
        "RMTD-FZ01": "agyolz_4prY",
        "RMTD-LX02": "agyolz_4prY",
        "RMTD-LX01": "agyolz_4prY",
      }
      
      if (product) {
        setSelectedProduct({
          name: product.name,
          modelName: product.modelName,
          description: product.description,
          image: product.image,
          youtubeVideoId: packagingVideoIds[product.modelName] || "qYCkghfJIx4",
          detailLink: product.detailLink || "#",
        })
      } else {
        setSelectedProduct({
          name: productName,
          modelName: modelName,
          description: "고품질 산업용 장비로, 정밀한 작업과 높은 내구성을 자랑합니다.",
          image: "/product-detail-image.png",
          youtubeVideoId: packagingVideoIds[modelName] || "qYCkghfJIx4",
          detailLink: "#",
        })
      }
    } else if (cat === 3 && actualIndex !== undefined && patternProducts[actualIndex]) {
      const product = patternProducts[actualIndex]
      setSelectedProduct({
        name: product.name,
        modelName: product.modelName,
        description: product.description,
        image: product.image,
        youtubeVideoId: "-FqkoSlJ6WU",
        detailLink: product.detailLink,
      })
    } else if (cat === 7 && actualIndex !== undefined && peripheralProducts[actualIndex]) {
      const product = peripheralProducts[actualIndex]
      
      // 주변기기 제품별 영상 ID
      const peripheralVideoIds: Record<string, string> = {
        "SB-511": "c_smbozwwYQ",
        "DO-611": "1j_jTt8xdjE",
        "LO-2000/PT": "U5HcaNQlwmc",
        "LO-TRM2": "VCCvj9ePG2U",
        "LO-988CU": "arXv2YyxLBI",
        "LE-HPM1-2": "oGmLGvKBa4A",
        "LO-538": "MgqXARxFpWM",
        "LEBW-528": "o04SiI50zK0",
      }
      
      setSelectedProduct({
        name: product.name,
        modelName: product.modelName,
        description: product.description,
        image: product.image,
        youtubeVideoId: peripheralVideoIds[product.modelName] || "qYCkghfJIx4",
        detailLink: product.detailLink,
      })
    } else if (cat === 5) {
      // 컴퓨터 자수기 - find embroidery product by name and model
      let foundProduct = null
      
      // 제품별 설명
      const embroideryDescriptions: Record<string, string> = {
        "LE-1201": "싱글헤드 자수기로 평판, 모자, 수틀 다양한 제품군에 적용하여 컴퓨터 자수를 실현할 수 있습니다. 또한 이미지 자동 펀칭 기능을 이용하여 누구나 쉽게 컴퓨터 자수를 사용할 수 있습니다.",
        "LE-1204": "4개의 헤드가 동시로 작업을 하여 빠른 생산성을 자랑합니다.",
        "LE-1208": "8개의 헤드가 동시로 작업을 하여 빠른 생산성을 자랑합니다.",
      }
      
      // 싱글 헤드에서 찾기
      foundProduct = embroiderySingleHeadProducts.find(p => p.name === productName && p.modelName === modelName)
      if (foundProduct) {
        setSelectedProduct({
          name: foundProduct.name,
          modelName: foundProduct.modelName,
          description: embroideryDescriptions[foundProduct.modelName] || foundProduct.description,
          image: foundProduct.image,
          youtubeVideoId: null,
          detailLink: foundProduct.detailLink,
        })
        return
      }
      
      // 멀티 헤드에서 찾기
      foundProduct = embroideryMultiHeadProducts.find(p => p.name === productName && p.modelName === modelName)
      if (foundProduct) {
        setSelectedProduct({
          name: foundProduct.name,
          modelName: foundProduct.modelName,
          description: embroideryDescriptions[foundProduct.modelName] || foundProduct.description,
          image: foundProduct.image,
          youtubeVideoId: null,
          detailLink: foundProduct.detailLink,
        })
        return
      }
      
      // 추가장치에서 찾기
      const accProduct = embroideryAccessoryProducts.find(p => p.name === productName)
      if (accProduct) {
        setSelectedProduct({
          name: accProduct.name,
          modelName: accProduct.modelName,
          description: accProduct.description,
          image: accProduct.image,
          youtubeVideoId: "qYCkghfJIx4",
          detailLink: accProduct.detailLink,
        })
      } else {
        setSelectedProduct({
          name: productName,
          modelName: modelName,
          description: "고품질 산업용 장비로, 정밀한 작업과 높은 내구성을 자랑합니다. 최신 기술이 적용되어 생산성을 극대화하며, 다양한 소재에 적합한 맞춤형 솔루션을 제공합니다.",
          image: "/product-detail-image.png",
          youtubeVideoId: "qYCkghfJIx4",
          detailLink: "#",
        })
      }
    } else if (cat === 4 && stitchImages[actualIndex ?? 0]) {
      const product = stitchImages[actualIndex ?? 0]
      setSelectedProduct({
        name: "특수 스티치",
        modelName: `Stitch-${String(actualIndex ?? 0 + 1).padStart(3, "0")}`,
        description: "봉제에서 특수 스티치는 다양한 재봉기, 다양한 개조 방식을 통해 제작이 됩니다. 저희 다온 쏘잉 시스템은 다양한 경험과 노하우로 원하는 특수 스티치 구현을 도와드릴 수 있습니다.",
        image: product,
        youtubeVideoId: null,
        detailLink: "https://daonsewing.blogspot.com/2026/02/01.html",
      })
    } else {
      setSelectedProduct({
        name: productName,
        modelName: modelName,
        description: "고품질 산업용 장비로, 정밀한 작업과 높은 내구성을 자랑합니다. 최신 기술이 적용되어 생산성을 극대화하며, 다양한 소재에 적합한 맞춤형 솔루션을 제공합니다.",
        image: "/product-detail-image.png",
        youtubeVideoId: "qYCkghfJIx4",
        detailLink: "#",
      })
    }
    setIsVideoPlaying(false)
  }

  const closeProductDetail = () => {
    setSelectedProduct(null)
    setIsVideoPlaying(false)
  }

  const scrollCategories = (direction: "left" | "right") => {
    if (categoryScrollRef.current) {
      const scrollAmount = 150
      categoryScrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const handleImageScroll = () => {
    if (imageScrollRef.current) {
      const scrollLeft = imageScrollRef.current.scrollLeft
      const containerWidth = imageScrollRef.current.clientWidth
      const newIndex = Math.round(scrollLeft / containerWidth)
      setCurrentImageIndex(newIndex)
    }
  }

  return (
    <section id="products" className="py-10 lg:py-20 px-4 bg-[#151515]">
      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeProductDetail} />

          {/* Modal Content */}
          <div className="relative bg-card rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Top Bar: Copy + Close */}
            <div className="sticky top-0 z-10 flex items-center justify-end gap-2 p-3 bg-card/80 backdrop-blur-sm rounded-t-2xl">
              <button
                onClick={() => {
                  const url = selectedProduct.detailLink || window.location.href
                  navigator.clipboard.writeText(url)
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 2000)
                }}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-all duration-300"
                aria-label="링크 복사"
              >
                {isCopied ? (
                  <Check className="w-4 h-4 text-green-500" />
                ) : (
                  <Link2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={closeProductDetail}
                className="p-2 rounded-full bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="닫기"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="px-6 pb-6 md:px-8 md:pb-8">
              {/* Product Info Header: Name, Model, Description */}
              <div className="mb-4">
                <div className="flex items-baseline gap-3 mb-2">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground">{selectedProduct.name}</h2>
                  {selectedProduct.modelName && (
                    <span className="text-sm text-muted-foreground">{selectedProduct.modelName}</span>
                  )}
                </div>
                {selectedProduct.description && (
                  <p className="text-muted-foreground text-sm leading-relaxed">{selectedProduct.description}</p>
                )}
              </div>

              {/* Product Image */}
              <div className="rounded-xl overflow-hidden bg-white mb-4 relative">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-contain aspect-[4/3]"
                />
              </div>

              {/* Action Buttons - Individual Style */}
              <div className="flex gap-2 mb-4">
                {selectedProduct.youtubeVideoId && (
                  <button
                    onClick={() => setIsVideoPlaying(!isVideoPlaying)}
                    className={`flex-1 py-2.5 px-4 rounded-lg text-xs font-medium transition-colors duration-300 cursor-pointer ${
                      isVideoPlaying
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary text-primary-foreground hover:bg-primary/90"
                    }`}
                  >
                    {"영상"}
                  </button>
                )}
                {selectedProduct.detailLink && (
                  <a
                    href={selectedProduct.detailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-lg text-xs font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300 text-center"
                  >
                    {"자세히 알아보기"}
                  </a>
                )}
              </div>

              {/* Video Player */}
              {selectedProduct.youtubeVideoId && (
                <div className="mt-4 rounded-xl overflow-hidden aspect-video bg-black">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${selectedProduct.youtubeVideoId}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto">
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Netflix-style: ALL categories as separate rows */}
          <div className="flex-1 space-y-8">
            {categories.map((catName, catIndex) => {
              const hasSubCats = !!subCategories[catIndex]

              // Build product list for this category
              const getProductsForCategory = (catIdx: number, subFilter: number | null) => {
                // With sub-category filter
                if (subFilter !== null && subCategories[catIdx]) {
                  const subImages = getSubCategoryImages(catIdx)?.[subFilter] || []
                  return subImages.map((img, i) => {
                    if (catIdx === 1 && cuttingProducts[subFilter]?.[i]) {
                      return { name: cuttingProducts[subFilter][i].name, modelName: cuttingProducts[subFilter][i].modelName, image: img }
                    }
                    if (catIdx === 2 && packagingProducts[subFilter]?.[i]) {
                      return { name: packagingProducts[subFilter][i].name, modelName: packagingProducts[subFilter][i].modelName, image: img }
                    }
                    if (catIdx === 5) {
                      if (subFilter === 0 && embroiderySingleHeadProducts[i]) {
                        return { name: embroiderySingleHeadProducts[i].name, modelName: embroiderySingleHeadProducts[i].modelName, image: img }
                      }
                      if (subFilter === 1 && embroideryMultiHeadProducts[i]) {
                        return { name: embroideryMultiHeadProducts[i].name, modelName: embroideryMultiHeadProducts[i].modelName, image: img }
                      }
                      if (subFilter === 2 && embroideryAccessoryProducts[i]) {
                        return { name: embroideryAccessoryProducts[i].name, modelName: "", image: img }
                      }
                      return { name: subCategories[5][subFilter], modelName: "", image: img }
                    }
                    return { name: subCategories[catIdx]?.[subFilter] || catName, modelName: "", image: img }
                  })
                }

                // "전체" mode - all products
                if (catIdx === 0) return automationProducts.map(p => ({ name: p.name, modelName: p.modelName, image: p.image }))
                if (catIdx === 1) {
                  const all: { name: string; modelName: string; image: string }[] = []
                  for (let s = 0; s < (subCategories[1]?.length || 0); s++) {
                    for (const p of (cuttingProducts[s] || [])) all.push({ name: p.name, modelName: p.modelName, image: p.image })
                  }
                  return all
                }
                if (catIdx === 2) {
                  const all: { name: string; modelName: string; image: string }[] = []
                  for (let s = 0; s < (subCategories[2]?.length || 0); s++) {
                    for (const p of (packagingProducts[s] || [])) all.push({ name: p.name, modelName: p.modelName, image: p.image })
                  }
                  return all
                }
                if (catIdx === 3) return patternProducts.map(p => ({ name: p.name, modelName: p.modelName, image: p.image }))
                if (catIdx === 4) return stitchImages.map((s, i) => ({ name: typeof s === "string" ? "특수 스티치" : s.name, modelName: typeof s === "string" ? String(i + 1).padStart(2, "0") : s.modelName, image: typeof s === "string" ? s : s.image }))
                if (catIdx === 5) {
                  const all: { name: string; modelName: string; image: string }[] = []
                  const subImgs = getSubCategoryImages(5)
                  if (subImgs) {
                    subImgs.forEach((imgs, sIdx) => {
                      imgs.forEach((img, imgIdx) => {
                        if (sIdx === 0 && embroiderySingleHeadProducts[imgIdx]) {
                          all.push({ name: embroiderySingleHeadProducts[imgIdx].name, modelName: embroiderySingleHeadProducts[imgIdx].modelName, image: img })
                        } else if (sIdx === 1 && embroideryMultiHeadProducts[imgIdx]) {
                          all.push({ name: embroideryMultiHeadProducts[imgIdx].name, modelName: embroideryMultiHeadProducts[imgIdx].modelName, image: img })
                        } else if (sIdx === 2 && embroideryAccessoryProducts[imgIdx]) {
                          all.push({ name: embroideryAccessoryProducts[imgIdx].name, modelName: "", image: img })
                        } else {
                          all.push({ name: subCategories[5][sIdx], modelName: "", image: img })
                        }
                      })
                    })
                  }
                  return all
                }
                if (catIdx === 6) {
                  const sewingBrandNames = ["듀코프 아들러", "파프", "페가수스", "주키", "썬스타", "간사이 스페셜", "브라더", "잭", "세이코"]
                  return sewingBrandImages.map((img, i) => ({ name: sewingBrandNames[i] || `일반 재봉기 ${i + 1}`, modelName: "", image: img }))
                }
                if (catIdx === 7) return peripheralProducts.map(p => ({ name: p.name, modelName: p.modelName, image: p.image }))
                return categoryImages[catIdx].map((img, i) => ({ name: catName, modelName: `${catName}-${String(i + 1).padStart(3, "0")}`, image: img }))
              }

              return (
                <MobileCategoryRow
                  key={catIndex}
                  catIndex={catIndex}
                  catName={catName}
                  hasSubCats={hasSubCats}
                  subCats={subCategories[catIndex] || []}
                  getProductsForCategory={getProductsForCategory}
                  onProductClick={handleProductClick}
                  hideNameModel={false}
                />
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
