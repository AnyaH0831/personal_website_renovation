import {colors} from '../theme/colors.js';

function Profile({data}) {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20 relative overflow-hidden">
       
            <div className = "absolute top-20 left-10 w-96 h-96 bg-cherry-rose/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className = "absolute bottom-20 right-10 w-80 h-80 bg-pacific-cyan/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className = "absolute top-1/2 left-1/3 w-64 h-64 bg-royal-plum/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>
            <div className = "absolute top-10 right-1 w-64 h-64 bg-velvet-purple/20 rounded-full blur-3xl animate-pulse pointer-events-none"></div>

            {/* Tech-looking line patterns bg */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{
                        backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${colors['pacific-cyan']} 2px, ${colors['pacific-cyan']} 4px)`

            }}></div>

            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black pointer-events-none"></div>

            <div className="max-w-4xl w-full text-center">
                <div className="mb-8 relative">
                    
                    <div className="absolute inset-0 w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-cherry-rose via-royal-plum to-pacific-cyan opacity-50 blur-xl animate-pulse"></div>
                    <div
                        className="w-48 h-48 mx-auto mb-6 rounded-full p-1 relative z-10 animate-spin-slow"
                        style={{
                            background: `conic-gradient(from 0deg, ${colors['cherry-rose']}, ${colors['royal-plum']}, ${colors['rich-cerulean']}, ${colors['pacific-cyan']}, ${colors['cherry-rose']})`
                        }}
                    >
                        <div className="w-full h-full rounded-full overflow-hidden bg-black animate-spin-reverse">
                            <img
                                src="/profile_image.jpg"
                                alt={data.name}
                                className='w-full h-full object-cover'
                            />
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold font-mono mb-4 text-white">
                        {data.name}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-pacific-cyan mb-6 font-mono">
                        {data.tagline}
                    </p>
                    
                    <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
                        {data.bio}
                    </p>
                </div>


                <div className="flex justify-center gap-4 flex-wrap">
                    <a
                        href={data.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-rich-cerulean text-white rounded-full hover:bg-cherry-rose transition-colors shadow-lg"
                        aria-label="GitHub"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                            <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.579.688.481C19.138 20.203 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/>
                        </svg>
                    </a>
                    <a
                        href={data.links.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 flex items-center justify-center bg-rich-cerulean text-white rounded-full hover:bg-cherry-rose transition-colors shadow-lg"
                        aria-label="LinkedIn"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2.001 3.6 4.601v5.595z"/>
                        </svg>
                    </a>
                </div>

                {/* Arrow */}
                <div className="mt-16 animate-bounce">
                    <svg className='w-8 h-8 mx-auto text-pacific-cyan' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3'/>
                    </svg>
                </div>

            </div>
            
        </section>
    )
}

export default Profile;
