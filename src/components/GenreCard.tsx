import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

type GenreCardProps = {
  genre: string
}

const GenreCard = ({ genre }: GenreCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const navigate = useNavigate()

  const sharedStyles =
    'rounded-lg border-solid border-4 border-primary p-4 w-full h-full flex items-center justify-center absolute inset-0'

  const handleClick = () => {
    setIsFlipped((prev) => !prev)
  }

  const handleContactClick = () => {
    navigate(`/contact?package=${encodeURIComponent(genre)}`)
  }

  return (
    <div className="w-48 aspect-square" style={{ perspective: '1000px' }}>
      <div
        className="w-full h-full relative cursor-pointer transition-transform duration-700"
        onClick={handleClick}
        style={{
          transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d'
        }}
      >
        <div
          className={`${sharedStyles} bg-primary text-secondary`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          <h3 className="text-center text-lg font-semibold">{genre}</h3>
        </div>

        <div
          className={`${sharedStyles} bg-secondary text-primary`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          <button
            onClick={handleContactClick}
            className="text-primary hover:underline font-semibold bg-transparent border-none cursor-pointer"
          >
            Get in touch
          </button>
        </div>
      </div>
    </div>
  )
}

export default GenreCard
