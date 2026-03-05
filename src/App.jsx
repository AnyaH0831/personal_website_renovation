import './App.css'
import { useState } from 'react'
import { profileData, timelineItems, sideProjects } from './data/portfolioData';
import Profile from './components/Profile';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import ProjectCard from './components/ProjectCard'

const navLinks = [
  { href: '#profile',    label: 'Home' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#contact',    label: 'Contact' },
];

function App() {  
  const [menuOpen, setMenuOpen] = useState(false);

  let mobileMenuClass;
  if (menuOpen){
    mobileMenuClass = 'md:hidden overflow-hidden transition-all duration-300 max-h-60';
  }else if (!menuOpen){
    mobileMenuClass = 'md:hidden overflow-hidden transition-all duration-300 max-h-0';
  }
   
  return (
    <div className='min-h-screen bg-black font-mono'>

    {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900 shadow-sm z-50">
        <div className="container mx-auto px-4 py-2 max-w-7xl flex justify-between items-center">

          <h1 className="text-xl md:text-2xl font-bold font-mono text-dark-raspberry drop-shadow-[0_0_2px_#b7094c]"
            style={{WebkitTextStroke: `1px #0091ad`}}>
            <span className="md:hidden">AH</span>
            <span className="hidden md:inline">Anya Huang</span>
          </h1>
 
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-pacific-cyan hover:text-cherry-rose transition-colors">
                {link.label}
              </a>
            ))}
          </div>
    
          <button
            className="md:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 focus:outline-none"
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Toggle menu"
          >
            {(() => {
              let topBar = 'block h-0.5 w-6 bg-pacific-cyan transition-all duration-300';
              let midBar = 'block h-0.5 w-6 bg-pacific-cyan transition-all duration-300';
              let botBar = 'block h-0.5 w-6 bg-pacific-cyan transition-all duration-300';
              if (menuOpen) {
                topBar += ' rotate-45 translate-y-2';
                midBar += ' opacity-0';
                botBar += ' -rotate-45 -translate-y-2';
              }
              return (
                <>
                  <span className={topBar}></span>
                  <span className={midBar}></span>
                  <span className={botBar}></span>
                </>
              );
            })()}
          </button>

        </div>

        {/* Mobile dropdown */}
        <div className={mobileMenuClass}>
          <div className="flex flex-col bg-gray-900 border-t border-gray-800 px-4 py-2 gap-4">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className="text-pacific-cyan hover:text-cherry-rose transition-colors py-1"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
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


      <section id="projects" className="bg-black py-20 px-4">
        <div className='max-w-6xl mx-auto'>
          <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 font-mono'>
            <span className='bg-clip-text text-pacific-cyan'>
              Projects
            </span>
          </h2>
        

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {sideProjects.map(function(project) {
              return <ProjectCard key={project.id} project={project}/>
            })}
          </div>   
       
        </div>
      </section>


      <div id="contact">
        <Contact/>
      </div>
  
      <footer className="bg-black py-2 text-center border-t border-gray-800">
            <p className='text-pacific-cyan'>
               © 2026 Anya Huang.
            </p>
      </footer>


    </div>
  )
}

export default App
