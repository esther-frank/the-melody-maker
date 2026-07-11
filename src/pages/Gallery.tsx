import { useRef, useState } from 'react'
import NavBar from '../components/layout/NavBar'
import Footer from '../components/layout/Footer'

const chapters = [
  { title: 'Waterloo Sunset', timestamp: '0' },
  { title: 'From Me to You', timestamp: '47.7' },
  { title: 'Dream a Little Dream', timestamp: '84' },
  { title: 'Dream', timestamp: '128.5' },
  { title: 'Love me Tender', timestamp: '174.7' },
  { title: 'Over the Rainbow', timestamp: '220.1' },
  { title: 'Mamma Mia', timestamp: '246.5' },
  { title: 'Close to You', timestamp: '311.5' },
  { title: 'Edelweiss', timestamp: '352.5' },
  { title: "Annie's Song", timestamp: '383.5' },
  { title: 'Something Stupid', timestamp: '424.5' },
  { title: 'Amazing Grace', timestamp: '463.5' }
]

const Gallery = () => {
  const videoRef = useRef<any>(null)
  const [activeChapterIndex, setActiveChapterIndex] = useState(0)
  const intervalRef = useRef<any>(null)

  const getCurrentChapterIndex = (currentTimestamp: string) => {
    const currentTimeAsFloat = parseFloat(currentTimestamp)
    let activeChapter = 0
    for (let i = 1; i < chapters.length; i++) {
      if (parseFloat(chapters[i].timestamp) > currentTimeAsFloat) {
        return activeChapter
      }
      activeChapter++
    }
    return activeChapter
  }

  const runGetCurrentChapterIndex = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveChapterIndex(
        getCurrentChapterIndex(videoRef.current.currentTime)
      )
    }, 1000)
  }

  const handleClick = (index: number, timeToSeek: string) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = timeToSeek
    setActiveChapterIndex(index)
  }

  return (
    <div className="h-dvh max-h-dvh flex flex-col justify-start items-center">
      <NavBar />
      <div className="grow w-9/10 pt-4 md:pt-8 pb-2 grid grid-cols-3 md:grid-cols-4 gap-2 items-start">
        <video
          controls
          className="w-full col-span-3"
          playsInline={true}
          ref={videoRef}
          onPlay={runGetCurrentChapterIndex}
          onPause={() => {
            clearInterval(intervalRef.current)
          }}
          onEnded={() => {
            clearInterval(intervalRef.current)
          }}
        >
          <source
            src="https://d2nsknjzetj3dy.cloudfront.net/tmm-xs.mp4"
            type="video/mp4"
          />
        </video>
        <div className="flex flex-col w-full col-span-3 md:col-span-1 gap-2 overflow-y-scroll">
          {chapters.map((chapter, index) => (
            <button
              className={`border p-2 cursor-pointer rounded-lg ${index === activeChapterIndex ? 'bg-primary text-secondary' : 'bg-secondary text-primary'}`}
              key={`chapter-button-${chapter.title}`}
              onClick={() => handleClick(index, chapter.timestamp)}
            >
              {chapter.title}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Gallery
