import headshot from '../assets/headshot.jpg'
import { NavLink } from 'react-router'

const About = () => {
  return (
    <>
      <h1 className="mb-4">The Melody Maker</h1>
      <div className="flex flex-col items-start gap-8 md:flex-row-reverse md:justify-between">
        <img src={headshot} className="w-72 rounded-lg" alt="" />
        <div className="flex flex-col gap-4">
          <p>
            I am a professional guitarist with over 35 years experience. During
            this time I’ve toured extensively in the UK, Europe, North America,
            Australia and New Zealand, playing gigs and appearing on numerous TV
            and radio shows and a number of magazine covers. I’ve had records in
            the UK independent charts, US college radio charts, and National
            charts in New Zealand and Australia, earning a gold record in New
            Zealand. I’ve also produced albums for other artists in my home
            studio and done some guitar teaching.
          </p>
          <p>
            My passion is bringing music into the everyday of people’s lives.
            Whether that’s performing at weddings or funerals, in care homes,
            pubs, bars or busking, I play gentle, melodic, engaging arrangements
            of well-loved tunes by a variety of artists spanning decades of
            popular music from the 1940s to the present day. I have a
            comprehensive repertoire including Elvis, The Everly Brothers, The
            Beatles, Simon & Garfunkel, Abba, Coldplay, tunes from musicals such
            as the Sound of Music, hymns and Christmas favourites. With over 150
            songs at my fingertips there’s always something for everyone to
            enjoy. Just get in touch via the{' '}
            <NavLink to="/contact" className="underline">
              contact form
            </NavLink>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default About
