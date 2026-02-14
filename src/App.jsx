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

      <section id="contact" className="bg-gray-1000 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className='text-4xl md:text-5xl font-bold mb-8 font-mono'>
            <span className="text-pacific-cyan">
              Let's Chat!
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8">
            I would love to hear from you! Whether you have a question, want to collaborate, or just want to say hi, feel free to reach out.
          </p>

          <div className="mb-4 w-2/3 mx-auto">
            <label for="name"className='block text-left text-cherry-rose text-xl font-bold mb-2'>
              Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              placeholder='Your Name...'
              className='w-full h-8 text-gray-300 border-2 font-mono bg-gray-900 focus:shadow-outline focus:border-blue-500'
            />
          </div>

          <div className='mb-4 w-2/3 mx-auto'>  
            <label for="email"className='block text-left text-cherry-rose text-xl font-bold mb-2'>
              Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='..@gmail.com'
              className='w-full h-8 text-gray-300 font-mono bg-gray-900 border-2 border-red'
            />
          </div>
          
          <div className='mb-4 w-2/3 h-full mx-auto'>  
            <label for="message"className='block text-left text-cherry-rose text-xl font-bold mb-2'>
              Message
            </label>
            <textarea
              type='message'
              id='message'
              name='message'
              rows="5"
              placeholder='Hello...'
              className='w-full h-full text-gray-300 font-mono bg-gray-900 border-2 border-red'
            />
          </div>
        </div>
      </section>

    </div>
  )
}

export default App
