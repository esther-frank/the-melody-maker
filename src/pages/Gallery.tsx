const Gallery = () => {
  return (
    <div className="aspect-video w-full">
      <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/MtN1YnoL46Q?rel=0"
        title="YouTube video player"
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  )
}

export default Gallery
