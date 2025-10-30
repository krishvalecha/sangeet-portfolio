"use client"

import { useState } from "react"

interface Video {
  id: string
  title: string
  description: string
  src: string
  thumbnail: string  // ← ADDED
}

interface VideoCardProps {
  video: Video
  onSelect: () => void
}

export default function VideoCard({ video, onSelect }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer h-64 sm:h-72 lg:h-80 shadow-lg hover:shadow-2xl transition-all duration-300 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
    >
      {/* ✅ FIXED: Added poster attribute for instant thumbnail */}
      <video
        src={video.src}
        poster={video.thumbnail}  // ← ADDED - Shows thumbnail instantly!
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        preload="metadata"
        playsInline
        muted
        crossOrigin="anonymous"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-ivory transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-serif text-xl font-bold mb-2">{video.title}</h3>
        <p className="font-sans text-sm text-ivory/90 line-clamp-2">{video.description}</p>
      </div>

      {/* Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          <svg className="w-8 h-8 text-burgundy fill-current ml-1" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>
  )
}