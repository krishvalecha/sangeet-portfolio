"use client"

import { useState } from "react"
import Hero from "@/components/hero"
import VideoGallery from "@/components/video-gallery"
//import IntroSection from "@/components/intro-section"
import Footer from "@/components/footer"
import VideoModal from "@/components/video-modal"
import VideosCTA from "@/components/videos-cta"
import VideoSection from "@/components/video-section" 
import MeetTheTeam from "@/components/meet-the-team"

export default function Home() {
  const [selectedVideo, setSelectedVideo] = useState<{
    id: string
    title: string
    description: string
    src: string
  } | null>(null)

  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <VideoSection/>
      
      <VideoGallery onVideoSelect={setSelectedVideo} />
      <MeetTheTeam />
      <Footer />
      {selectedVideo && <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />}
    </main>
  )
}
