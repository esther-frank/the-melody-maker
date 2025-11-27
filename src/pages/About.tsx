import aiImage from '../assets/smaller-ai-image.jpg'

const About = () => {
  return (
    <>
      <h1 className='mb-4'>The Melody Maker</h1>
      <div className="flex flex-col items-start gap-8 md:flex-row-reverse md:justify-between">
        <img src={aiImage} className="w-60" />
        <p>
          This is the about page of The Melody Maker application. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Consequatur aliquam optio
          nesciunt quaerat, ex aut aliquid perferendis neque natus eius iure
          quam obcaecati labore, quibusdam ratione. Adipisci neque aspernatur
          ea? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
          sapiente ducimus est voluptate unde incidunt nisi et consectetur
          soluta voluptas, maxime atque accusantium ea veritatis quos eius
          pariatur similique possimus! Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Aliquid assumenda repellendus voluptatem optio
          voluptatum enim beatae veniam perferendis eaque tenetur reprehenderit
          quo magnam, ipsam dicta veritatis voluptatibus consequatur ipsum
          nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Mollitia nobis unde cum nihil illo fugiat perferendis, quis ex
          blanditiis beatae, ullam consequatur iusto! Doloremque officiis
          impedit explicabo molestias non quibusdam.
        </p>
      </div>
    </>
  )
}

export default About
