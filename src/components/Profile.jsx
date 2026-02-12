import {colors} from '../theme/colors.js';

function Profile({data}) {
    return (
        <section className="min-h-screen bg-black flex items-center justify-center px-4 py-20 relative overflow-hidden">
       
            {/* Tech-looking line patterns bg */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                    style={{backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, ${colors['pacific-cyan']} 2px, ${colors['pacific-cyan']} 4px)`

            }}></div>

            <div className="max-w-4xl w-full text-center">
                <div className="mb-8 relative">
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
                    <a href={data.links.github}
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "px-6 py-3 bg-richh-cerulean text-white rounded-lg hover:bg-cerulean transition-colors font-mono"
                    >GitHub</a>


                    <a href={data.links.linkedin}
                        target = "_blank"
                        rel = "noopener noreferrer"
                        className = "px-6 py-3 bg-richh-cerulean text-white rounded-lg hover:bg-cerulean transition-colors font-mono"
                    >LinkedIn</a>

                </div>



            </div>
            
        </section>
    )
}

export default Profile;