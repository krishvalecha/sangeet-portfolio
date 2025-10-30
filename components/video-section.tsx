"use client"

import { useEffect, useRef } from "react"

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // 🎯 Create Intersection Observer for scroll-triggered playback
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 } // play when 40% of section is visible
    )

    observer.observe(video)

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/WhatsApp Video 2025-10-31 at 00.56.05_30029547.mp4"
        loop
        muted
        playsInline
      />

      {/* Optional: overlay for a dimmed look */}
      <div className="absolute inset-0 bg-black/30" />
    </section>
  )
}
