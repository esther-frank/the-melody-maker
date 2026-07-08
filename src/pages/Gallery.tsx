import { useRef, useState } from 'react'

const chapters = [
  { title: 'Waterloo Sunset', timestamp: '0' },
  { title: 'From Me to You', timestamp: '47' },
  { title: 'Dream a Little Dream', timestamp: '83' },
  { title: 'Dream', timestamp: '128' },
  { title: 'Love me Tender', timestamp: '174' },
  { title: 'Over the Rainbow', timestamp: '220' },
  { title: 'Mama Mia', timestamp: '245' },
  { title: 'Close to You', timestamp: '310' },
  { title: 'Edelweiss', timestamp: '352' },
  { title: "Annie's Song", timestamp: '383' },
  { title: 'Something Stupid', timestamp: '424' },
  { title: 'Amazing Grace', timestamp: '463' }
]

const getCurrentChapterIndex = (currentTimestamp: string) => {
  const currentTimeAsFloat = parseFloat(currentTimestamp)
  let activeChapterIndex = 0
  for (let i = 1; i < chapters.length; i++) {
    if (parseFloat(chapters[i].timestamp) > currentTimeAsFloat) {
      return activeChapterIndex
    }
    console.log(`chapter ${activeChapterIndex} has already finished`)
    activeChapterIndex++
  }
}

const Gallery = () => {
  const videoRef = useRef<any>(null)

  const handleClick = (timeToSeek: string) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = timeToSeek
  }

  return (
    <div className="w-full grid grid-cols-3 md:grid-cols-4 gap-2 items-start">
      <video controls className="w-full col-span-3" ref={videoRef}>
        <source
          src="https://d2nsknjzetj3dy.cloudfront.net/tmm-xs.mp4"
          type="video/mp4"
        />
      </video>
      <div className="flex flex-col w-full col-span-3 md:col-span-1">
        <div className="flex flex-col gap-2">
          {chapters.map((chapter) => (
            <button
              className="border p-2 cursor-pointer"
              key={`chapter-button-${chapter.title}`}
              onClick={() => handleClick(chapter.timestamp)}
            >
              {chapter.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
