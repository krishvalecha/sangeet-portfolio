"use client"

import { useState } from "react"
import Image from "next/image"

interface Tutorial {
  id: string
  title: string
  description: string
  thumbnail: string
  driveLink: string
}

interface TutorialCardProps {
  tutorial: Tutorial
}

export default function TutorialCard({ tutorial }: TutorialCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const handleClick = () => {
    window.open(tutorial.driveLink, "_blank", "noopener,noreferrer")
  }

  return (
    <div
      className="group relative overflow-hidden rounded-2xl cursor-pointer h-64 sm:h-72 lg:h-80 shadow-lg hover:shadow-2xl transition-all duration-300 bg-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Thumbnail Image */}
      <Image
        src={tutorial.thumbnail}
        alt={tutorial.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-burgundy/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 text-ivory transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <h3 className="font-serif text-xl font-bold mb-2">{tutorial.title}</h3>
        <p className="font-sans text-sm text-ivory/90 line-clamp-2">{tutorial.description}</p>
      </div>

      {/* Play/Link Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
          {/* External Link Icon */}
          <svg 
            className="w-8 h-8 text-burgundy" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </div>
      </div>
    </div>
  )
}