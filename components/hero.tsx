"use client"

import { useEffect, useRef } from "react"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Play video when visible, pause when off-screen
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {})
        } else {
          video.pause()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative h-[100dvh] w-screen flex items-center justify-center overflow-hidden m-0 p-0">
      {/* 🎥 Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover sm:object-cover md:object-cover lg:object-cover xl:object-cover 
                   [@media(max-width:640px)]:object-contain [@media(max-width:640px)]:bg-black"
        src="/videos/Night.mp4"
        loop
        muted
        playsInline
      />

      {/* Optional dark overlay */}
      <div className="absolute inset-0 bg-black/30" />
    </section>
  )
}
