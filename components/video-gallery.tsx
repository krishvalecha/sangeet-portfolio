"use client"

import { useState, useEffect } from "react"
import VideoCard from "./video-card"
import TutorialCard from "./tutorial-card"

interface Video {
  id: string
  title: string
  description: string
  src: string
  thumbnail: string
}

interface Tutorial {
  id: string
  title: string
  description: string
  thumbnail: string
  driveLink: string
}

const performanceVideos: Video[] = [
  { 
    id: "1", 
    title: "Performance 1", 
    description: "", 
    src: "/videos/Grooms friends.mp4",
    thumbnail: "/thumbnails/thumbnail1.png"
  },
  { 
    id: "2", 
    title: "Performance 2", 
    description: "", 
    src: "/videos/Copy of AALSI family 1.mp4",
    thumbnail: "/thumbnails/thumbnail2.png"
  },
  { 
    id: "3", 
    title: "Performance 3", 
    description: "", 
    src: "/videos/10. Finale family.mp4.mp4",
    thumbnail: "/thumbnails/thumbnew.png"
  },
  { 
    id: "4", 
    title: "Performance 4", 
    description: "", 
    src: "/videos/groom solo.mp4",
    thumbnail: "/thumbnails/thumbnail4.png"
  },
]

const rehearsalVideos: Video[] = [
  { 
    id: "5", 
    title: "Rehearsal 1", 
    description: "", 
    src: "/videos/rehersall.mp4",
    thumbnail: "/thumbnails/newthumbnail.png"
  },
  { 
    id: "6", 
    title: "Rehearsal 2", 
    description: "", 
    src: "/videos/practice_3.mp4",
    thumbnail: "/thumbnails/thumbnail6.png"
  },
  { 
    id: "7", 
    title: "Rehearsal 3", 
    description: "", 
    src: "/videos/practice_2.mp4",
    thumbnail: "/thumbnails/thumbnail7.png"
  },
  { 
    id: "8", 
    title: "Rehearsal 4", 
    description: "", 
    src: "/videos/practice_4.mp4",
    thumbnail: "/thumbnails/thumbnail8.png"
  },
]

// ✨ NEW: Tutorial data
const tutorialSessions: Tutorial[] = [
  {
    id: "t1",
    title: "Tutorial 1",
    description: "Online session",
    thumbnail: "/thumbnails/tutorial_1.jpg",
    driveLink: "https://drive.google.com/file/d/1tqgONb83RjMUvMee_PJ3nvU4lpXIuZsC/view?usp=drive_link"
  },
  {
    id: "t2",
    title: "Tutorial 2",
    description: "Online session",
    thumbnail: "/thumbnails/tutorial_2.jpg",
    driveLink: "https://drive.google.com/file/d/1k1idllCXdoX4SRk4Pt5RqSwB2h9LhjG9/view?usp=drive_link"
  },
  {
    id: "t3",
    title: "Tutorial 3",
    description: "Online session",
    thumbnail: "/thumbnails/tutorial_3.jpg",
    driveLink: "https://drive.google.com/file/d/1Fm7u_hvAaUXfUnwyKzHhmqmoM73WpIow/view?usp=drive_link"
  },
  {
    id: "t4",
    title: "Tutorial 4",
    description: "Online session",
    thumbnail: "/thumbnails/tutorial_4.jpg",
    driveLink: "https://drive.google.com/file/d/1BCbVfLJ8GDIKWbJJaUKAyUiQ366ptqBA/view?usp=drive_link"
  },
]

interface VideoGalleryProps {
  onVideoSelect: (video: Video) => void
}

export default function VideoGallery({ onVideoSelect }: VideoGalleryProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const renderVideoSection = (
    title: string,
    videos: Video[],
    link: string,
    ctaText: string
  ) => (
    <div className="mb-24">
      <div
        className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy mb-4">{title}</h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {videos.map((video, index) => (
          <div
            key={video.id}
            className={`transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <VideoCard video={video} onSelect={() => onVideoSelect(video)} />
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-4">
          Check Out All The {title} Videos
        </h3>
        <p className="font-sans text-lg text-burgundy/70 mb-6 max-w-2xl mx-auto">
          Explore the full collection of our {title.toLowerCase()} highlights and moments
        </p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gold text-burgundy font-serif font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          {ctaText}
        </a>
      </div>
    </div>
  )

  // ✨ NEW: Render tutorial section
  const renderTutorialSection = () => (
    <div className="mb-24">
      <div
        className={`text-center mb-12 transform transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-burgundy mb-4">
          Online Sessions & Tutorials
        </h2>
        <div className="w-20 h-1 bg-gold mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {tutorialSessions.map((tutorial, index) => (
          <div
            key={tutorial.id}
            className={`transform transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <TutorialCard tutorial={tutorial} />
          </div>
        ))}
      </div>

      {/* <div className="mt-16 text-center">
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-burgundy mb-4">
          Explore More Tutorial Sessions
        </h3>
        <p className="font-sans text-lg text-burgundy/70 mb-6 max-w-2xl mx-auto">
          Access full-length tutorials and online sessions on Google Drive
        </p>
        <a
          href="https://drive.google.com/drive/folders/YOUR_TUTORIAL_FOLDER_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3 bg-gold text-burgundy font-serif font-bold rounded-lg hover:bg-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          View All Tutorial Sessions
        </a>
      </div> */}
    </div>
  )

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-ivory">
      <div className="max-w-7xl mx-auto">
        {renderVideoSection(
          "Performances",
          performanceVideos,
          "https://drive.google.com/drive/folders/1C9dMG2Pp8qf5lo1FkT6Pvx0DyTHAfdgU",
          "View All Performance Videos"
        )}
        {/* ✨ NEW: Tutorial Section */}
        {renderTutorialSection()}

        {renderVideoSection(
          "Rehearsal & Practice",
          rehearsalVideos,
          "https://drive.google.com/drive/folders/11Ffw11KOXMKpO0-SSsq69tdmMy0BVzJF",
          "View All Rehearsal Videos"
        )}
        
      </div>
    </section>
  )
}