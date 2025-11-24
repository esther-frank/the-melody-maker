import './App.css'
import aiImage from './assets/smaller-ai-image.jpg'

const App = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-4 min-h-screen'>
      <h1 className='text-4xl'>The Melody Maker</h1>
      <img className='w-64 h-64' src={aiImage} />
      <p className='text-gray-700'>Coming soon...</p>
    </div>
  )
}

export default App
