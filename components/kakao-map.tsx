"use client"

import { useEffect, useRef, useState } from "react"

declare global {
  interface Window {
    kakao: any
  }
}

type KakaoMapProps = {
  /** 지도에 표시할 주소 (도로명주소) */
  address: string
  /** 마커 위에 보여줄 이름 */
  placeName?: string
  /** 확대 레벨 (숫자가 작을수록 확대, 1~14) */
  level?: number
}

const SDK_ID = "kakao-map-sdk"

function loadKakaoSdk(appKey: string): Promise<void> {
  return new Promise((resolve, reject) => {
    if (window.kakao?.maps?.services) {
      resolve()
      return
    }

    const onLoad = () => window.kakao.maps.load(() => resolve())

    const existing = document.getElementById(SDK_ID) as HTMLScriptElement | null
    if (existing) {
      existing.addEventListener("load", onLoad)
      existing.addEventListener("error", () => reject(new Error("Kakao SDK load failed")))
      return
    }

    const script = document.createElement("script")
    script.id = SDK_ID
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appKey}&libraries=services&autoload=false`
    script.async = true
    script.onload = onLoad
    script.onerror = () => reject(new Error("Kakao SDK load failed"))
    document.head.appendChild(script)
  })
}

export function KakaoMap({ address, placeName = "daOn", level = 3 }: KakaoMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [failed, setFailed] = useState(false)
  const appKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY

  useEffect(() => {
    if (!appKey) {
      setFailed(true)
      return
    }

    let cancelled = false

    loadKakaoSdk(appKey)
      .then(() => {
        if (cancelled || !containerRef.current) return
        const { kakao } = window
        const geocoder = new kakao.maps.services.Geocoder()

        geocoder.addressSearch(address, (result: any[], status: string) => {
          if (cancelled || !containerRef.current) return
          if (status !== kakao.maps.services.Status.OK || !result[0]) {
            setFailed(true)
            return
          }

          const coords = new kakao.maps.LatLng(result[0].y, result[0].x)
          const map = new kakao.maps.Map(containerRef.current, { center: coords, level })
          map.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT)

          const marker = new kakao.maps.Marker({ map, position: coords })
          const infoWindow = new kakao.maps.InfoWindow({
            content: `<div style="padding:6px 10px;font-size:13px;white-space:nowrap;">${placeName}</div>`,
          })
          infoWindow.open(map, marker)
        })
      })
      .catch(() => setFailed(true))

    return () => {
      cancelled = true
    }
  }, [address, placeName, level, appKey])

  const mapLink = `https://map.kakao.com/link/search/${encodeURIComponent(address)}`

  return (
    <div className="relative w-full h-full">
      <div ref={containerRef} className="w-full h-full" />
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-card text-center p-6">
          <p className="text-sm text-muted-foreground">{"지도를 불러올 수 없습니다."}</p>
          <a
            href={mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary underline underline-offset-4"
          >
            {"카카오맵에서 보기"}
          </a>
        </div>
      )}
      {!failed && (
        <a
          href={mapLink}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-3 left-3 z-10 rounded bg-white/90 px-2.5 py-1 text-xs font-medium text-black shadow hover:bg-white"
        >
          {"카카오맵에서 크게 보기"}
        </a>
      )}
    </div>
  )
}
