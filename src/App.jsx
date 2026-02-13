import './App.css'
import { profileData } from './data/portfolioData';
import Profile from './components/Profile';

function App() {

  return (
    <div className='min-h-screen bg-black font-mono'>

      <nav className = "fixed top-0 left-0 right-0 bg-gray-900 shadow-sm z-50">
        <div className = "container mx-auto px-4 py-2 max-w-7xl flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold font-mono text-dark-raspberry drop-shadow-[0_0_2px_#b7094c]"
            style={{WebkitTextStroke: `1px #0091ad`}}>
            Anya Huang
          </h1>
        </div>
      </nav>

      {/* Profile Section */}
      <div id="profile">
        <Profile data={profileData}/>
      </div>

    </div>
  )
}

export default App
