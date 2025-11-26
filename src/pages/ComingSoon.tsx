import aiImage from '../assets/smaller-ai-image.jpg'

const ComingSoon = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 min-h-screen">
      <h1 className="text-4xl font-heading">The Melody Maker</h1>
      <img className="w-64 h-64" src={aiImage} />
      <p className="text-gray-700 font-body">Coming soon...</p>
    </div>
  )
}
export default ComingSoon
