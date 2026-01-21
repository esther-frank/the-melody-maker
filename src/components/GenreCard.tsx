import { useState } from 'react'

const GenreCard = () => {
  const [isFlipped, setIsFlipped] = useState(false)

  const sharedStyles =
    'rounded-lg border-solid border-4 border-primary p-4 w-full h-full flex items-center justify-center absolute inset-0'

  const handleClick = () => {
    setIsFlipped((prev) => !prev)
  }

  return (
    <div className="w-1/4 aspect-square" style={{ perspective: '1000px' }}>
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
          Front
        </div>

        <div
          className={`${sharedStyles} bg-secondary text-primary`}
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          Back
        </div>
      </div>
    </div>
  )
}

export default GenreCard
