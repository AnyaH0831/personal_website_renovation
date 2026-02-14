import './App.css'
import { profileData, timelineItems } from './data/portfolioData';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import Contact from './components/Contact';


function App() {

  return (
    <div className='min-h-screen bg-black font-mono'>

    {/* Navbar */}
      <nav className = "fixed top-0 left-0 right-0 bg-gray-900 shadow-sm z-50">
        <div className = "container mx-auto px-4 py-2 max-w-7xl flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold font-mono text-dark-raspberry drop-shadow-[0_0_2px_#b7094c]"
            style={{WebkitTextStroke: `1px #0091ad`}}>
            Anya Huang
          </h1>

          <div className="flex items-center gap-6">
            <a href="#profile" className="text-pacific-cyan hover:text-cherry-rose transition-colors">
              Home
            </a>

            <a href="#experience" className="text-pacific-cyan hover:text-cherry-rose transition-colors">
              Experience
            </a>

            <a href="#projects" className="text-pacific-cyan hover:text-cherry-rose transition-colors">
              Projects
            </a>

            <a href="#contact" className="text-pacific-cyan hover:text-cherry-rose transition-colors">
              Contact
            </a>

          </div>

        </div>
      </nav>

      {/* Profile Section */}
      <div id="profile">
        <Profile data={profileData}/>
      </div>

      <div id="experience">
        <Timeline items={timelineItems}/>
      </div>

      <div id="contact">
        <Contact/>
      </div>

    </div>
  )
}

export default App
