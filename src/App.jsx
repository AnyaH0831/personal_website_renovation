import './App.css'
import { profileData } from './data/portfolioData'
import Profile from './components/Profile'

function App() {

  return (
    <div className='min-h-screen bg-black font-mono'>

      {/* Profile Section */}
      <div id="profile">
        <Profile data={profileData}/>
      </div>

    </div>
  )
}

export default App
