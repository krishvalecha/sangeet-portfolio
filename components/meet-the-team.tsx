"use client"

import { useState } from "react"

interface Member {
  id: string
  src: string
  alt?: string
}

const TEAM: Member[] = [
  { id: "1", src: "/images/team/member1.jpg", alt: "Melroy Fernandes" },
  { id: "2", src: "/images/team/member2.jpg", alt: "Joshua Fernandes" },
  { id: "3", src: "/images/team/member3.jpg", alt: "Christine Timmins" },
  { id: "4", src: "/images/team/member4.jpg", alt: "Madhura Giri" },
]

export default function MeetTheTeam() {
  const [lightbox, setLightbox] = useState<Member | null>(null)

  return (
    <section
      id="team"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-ivory"
      aria-labelledby="team-heading"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            id="team-heading"
            className="font-serif text-4xl sm:text-5xl font-bold text-burgundy"
          >
            Meet the Team
          </h2>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {TEAM.map((member) => (
            <button
              key={member.id}
              onClick={() => setLightbox(member)}
              className="group relative w-full rounded-2xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105 focus:outline-none"
              type="button"
            >
              <img
                src={member.src}
                alt={member.alt ?? ""}
                loading="lazy"
                className="w-full h-80 object-contain rounded-2xl"
              />
            </button>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-3xl sm:text-4xl font-serif text-burgundy mb-6">
            Regulars & Workshops
          </h3>
          <a
            href="https://drive.google.com/drive/folders/1sb3X5Y68Md12oYqRTMBslLpYz7_lzNzv" // replace this with your real link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 text-lg font-semibold text-white bg-burgundy rounded-full hover:bg-burgundy/80 transition-colors duration-300"
          >
            Explore Sessions
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setLightbox(null)}
        >
          <div className="max-w-3xl w-full bg-transparent">
            <button
              onClick={() => setLightbox(null)}
              className="mb-4 text-white px-3 py-1 rounded bg-black/40 hover:bg-black/60"
            >
              Close
            </button>
            <img
              src={lightbox.src}
              alt={lightbox.alt ?? ""}
              className="w-full h-auto object-contain rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  )
}
