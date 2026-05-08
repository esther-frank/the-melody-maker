import { NavLink } from 'react-router'

const CareHomes = () => {
  const packages = [
    'The Beatles',
    '1950s/1960s',
    'Number One Hits',
    'Love songs',
    'Christmas'
  ]

  return (
    <div>
      <h1 className="mb-4">The Melody Maker</h1>
      <div className="flex flex-col gap-4">
        <p>
          With a comprehensive repertoire of over 150 songs from, for example,
          Elvis, The Everly Brothers, The Beatles, Simon & Garfunkel, Abba,
          tunes from musicals such as the Sound of Music, hymns and Christmas
          favourites there’s always something for everyone to enjoy.
        </p>
        <p>
          My performances not only engage the listener emotionally through the
          music, but are also intellectually stimulating, being peppered with
          anecdotes, trivia and stories about the songs and the artists.
        </p>
        <p>
          My regular performances include a variety of songs from different
          decades but, if you prefer something more specific, I also offer more
          finely tailored packages such as:
        </p>
        <ul>
          {packages.map((item) => (
            <li className="list-disc list-inside">{item}</li>
          ))}
        </ul>
        <p>
          To book, get in touch{' '}
          <NavLink className="text-primary underline" to="/contact">
            here
          </NavLink>
          .
        </p>
      </div>
    </div>
  )
}

export default CareHomes
