"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Create Intersection Observer to trigger play/pause
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 } // start playing when 40% visible
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative h-screen w-screen flex items-center justify-center overflow-hidden m-0 p-0">

      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/WhatsApp Video 2025-10-31 at 00.16.05_c5a30a18.mp4"
        loop
        muted
        playsInline
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </section>
  )
}