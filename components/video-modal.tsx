"use client"

import { useEffect, useRef } from "react"
import { X, Maximize2, Volume2, VolumeX } from "lucide-react"
import { useState } from "react"

interface VideoModalProps {
  video: {
    id: string
    title: string
    description: string
    src: string
  }
  onClose: () => void
}

export default function VideoModal({ video, onClose }: VideoModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [])

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (!isFullscreen) {
        videoRef.current.requestFullscreen().catch(() => {})
      } else {
        document.exitFullscreen().catch(() => {})
      }
      setIsFullscreen(!isFullscreen)
    }
  }

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause()
    }
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
        onClick={handleClose}
      />

      {/* Modal content */}
      <div className="relative z-10 w-full max-w-4xl animate-in zoom-in-95 fade-in duration-300">
        <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
          {/* Video player */}
          <video
            ref={videoRef}
            src={video.src}
            className="w-full h-auto max-h-[80vh] object-cover"
            controls
            autoPlay
            onEnded={handleClose}
          />

          {/* Custom controls overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex items-center justify-between">
            <div>
              <h3 className="font-serif text-xl font-bold text-ivory">{video.title}</h3>
              <p className="font-sans text-sm text-ivory/80">{video.description}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 bg-gold/80 hover:bg-gold rounded-full transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5 text-burgundy" />
                ) : (
                  <Volume2 className="w-5 h-5 text-burgundy" />
                )}
              </button>
              <button
                onClick={handleFullscreen}
                className="p-2 bg-gold/80 hover:bg-gold rounded-full transition-colors"
              >
                <Maximize2 className="w-5 h-5 text-burgundy" />
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 z-20 p-2 bg-gold/80 hover:bg-gold rounded-full transition-colors shadow-lg"
          >
            <X className="w-6 h-6 text-burgundy" />
          </button>
        </div>
      </div>
    </div>
  )
}
