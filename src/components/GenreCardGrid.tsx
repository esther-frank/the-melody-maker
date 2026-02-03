import GenreCard from './GenreCard'

const PACKAGES = [
  'The Beatles',
  '80s music',
  'Rock',
  'Pop',
  'Jazz',
  'Classical'
]

const GenreCardGrid = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4">
      {PACKAGES.map((genre) => (
        <GenreCard key={genre} genre={genre} />
      ))}
    </div>
  )
}

export default GenreCardGrid
