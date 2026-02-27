import {useState} from 'react'
// import {colors} from '../theme/colors.js';

function Timeline({items}){
    const [expandedId, setExpandedId] = useState(null);
    const [clickOrigin, setClickOrigin] = useState({ x: '50%', y: '50%' });
    
    const handleItemClick = function(id, event) {
        const card = event.currentTarget;
        const imageElement = card.querySelector('img');

        if (imageElement) {
            const rect = imageElement.getBoundingClientRect();
            const centerX = rect.left + rect.width/2;
            const centerY = rect.top + rect.height/2;

            setClickOrigin({x:`${centerX}px`, y:`${centerY}px`});
        }

        setExpandedId(id);   
    };
 
    const closeModal = function() {
        setExpandedId(null);
    };
  
    const expandedItem = items.find(function(item) {
        return item.id === expandedId;
    });

    return (
        <section className='bg-black py-20 px-4 relative overflow-hidden'>
            {/* <div className='absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black to-transparent pointer-events-none z-10'></div> */}

            <div className='max-w-6xl mx-auto'>
                <h2 className='text-4xl md:text-5xl font-bold text-center mb-16 font-mono'>
                    <span className='text-pacific-cyan'>
                        Experience
                    </span>
                </h2>

                <div className="relative">
                    <div className='absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-pacific-cyan md:transform md:-translate-x-1/2'></div>
                    {items.map(function(item, index) {
                        let isLeft, className;
                        let badgeClassName, badgeText, dotClassName;

                        if (index % 2 === 0) {
                            isLeft = true;
                        } else {
                            isLeft = false;
                        }

                        if (isLeft) {
                            className = "relative mb-12 md:flex md:justify-end md:pr-[calc(50%+24px)]";
                        } else {
                            className = "relative mb-12 md:flex md:justify-start md:pl-[calc(50%+24px)]";
                        }

                        if (item.type === 'work') {
                            badgeClassName = 'inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-1 bg-cherry-rose text-white';
                            badgeText = 'Work';
                            dotClassName = 'bg-cherry-rose shadow-[0_0_15px_rgba(183,9,76,0.8)]';
                        } else if (item.type === 'extracurricular') {
                            badgeClassName = 'inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-1 bg-pacific-cyan text-white';
                            badgeText = 'Extracurricular';
                            dotClassName = 'bg-pacific-cyan shadow-[0_0_15px_rgba(0,212,255,0.8)]';
                        } else {
                            badgeClassName = 'inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-1 bg-rich-cerulean text-white';
                            badgeText = 'Project';
                            dotClassName = 'bg-rich-cerulean shadow-[0_0_15px_rgba(0,123,167,0.8)]';
                        }

                        return (
                            <div
                                key={item.id}
                                className={className}
                            >
                                {/* dots */}
                                <div className={
                                    `absolute left-8 md:left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full ${dotClassName} z-10`}
                                >
                                </div>
                                <div
                                    onClick={function(e) {
                                        handleItemClick(item.id, e)
                                    }}
                                    className='w-80 md:w-96 cursor-pointer ml-16 md:ml-2'
                                >
                                    <div className="bg-gray-900 rounded-full p-3 border-2 border-rich-cerulean hover:border-cherry-rose hover:scale-105 transition-all duration-300 shadow-lg shadow-rich-cerulean/50 hover:shadow-cherry-rose/50 hover:shadow-xl flex items-center gap-4 relative">
                                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cherry-rose opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-pacific-cyan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        {item.image && (
                                            <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                                                <img
                                                    src={item.image}
                                                    alt={item.title}
                                                    className='w-full h-full object-cover'
                                                    style={{ objectPosition: 'center 35%' }}
                                                />
                                            </div>
                                        )}
                                        <div className='flex-1 min-w-0 pr-2'>
                                            <span className={badgeClassName}>
                                                {badgeText}
                                            </span>
                                            <h3 className="text-base font-bold text-pacific-cyan mb-0.5 font-mono line-clamp-1">
                                                {item.title}
                                            </h3>
                                            <p className ="text-cherry-rose font-semibold text-sm mb-0.5 line-clamp-1">
                                                {item.company}
                                            </p>
                                            <p className="text-cerulean text-xs">
                                                {item.date}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                
                </div>

            </div>

            {expandedItem && (
                (() => {
                    let expandedBadgeClassName, expandedBadgeText;
                    if (expandedItem.type === 'work') {
                        expandedBadgeClassName = 'inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4 bg-cherry-rose text-white';
                        expandedBadgeText = 'Work Experience';
                    } else if (expandedItem.type === 'extracurricular') {
                        expandedBadgeClassName = 'inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4 bg-pacific-cyan text-white';
                        expandedBadgeText = 'Extracurricular';
                    } else {
                        expandedBadgeClassName = 'inline-block px-4 py-2 text-sm font-semibold rounded-full mb-4 bg-rich-cerulean text-white';
                        expandedBadgeText = 'Project';
                    }
                    return (
                        <div
                            className='fixed inset-0 z-50 overflow-y-auto'
                            onClick={closeModal}
                        >
                            {/* bg photo when clicked */}
                            {expandedItem.image && (
                                <div
                                    className="fixed inset-0 animate-bg-fade-in overflow-hidden"
                                    style={{transformOrigin: `${clickOrigin.x} ${clickOrigin.y}`}}
                                >
                                    <img
                                        src={expandedItem.image}
                                        alt={expandedItem.title}
                                        className="w-full h-full object-cover"
                                        style={{objectPosition: 'center 35%'}}
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 animate-overlay-fade-in"></div>
                        
                                </div>
                            )}

                            <button
                                onClick={closeModal}
                                className="fixed top-6 right-6 z-50 w-12 h-12 rounded-full bg-gray-900/80 backdrop-blur-sm border-2 border-cherry-rose text-cherry-rose hover:bg-cherry-rose hover:text-white transition-colors flex items-center justify-center text-2xl shadow-lg animate-fade-in"
                            >
                               ✕ 
                            </button>

                            {/* info content, details */}

                            <div
                                className="relative z-10 flex items-center justify-center min-h-screen p-4 py-20"
                                onClick={function(e) {
                                    e.stopPropagation()
                                }}
                            >
                                <div className='bg-black/75 backdrop-blur-md rounded-3xl border-2 border-cherry-rose p-8 max-w-4xl w-full shadow-[0_0_50px_rgba(183,9,76,0.5)] animate-fade-in-delayed'>
                                    <div className='text-center mb-8'>
                                        <span className={expandedBadgeClassName}>
                                            {expandedBadgeText}
                                        </span>
                                        <h2 className='text-4xl font-bold text-pacific-cyan mb-3 font-mono'>
                                            {expandedItem.title}
                                        </h2>

                                        <p className="text-2xl text-cherry-rose font-semibold mb-2">
                                            {expandedItem.company}
                                        </p>

                                        <p className='text-lg text-cerulean mb-6'>
                                            {expandedItem.date}
                                        </p>

                                        <p className="text-xl text-white mb-6">
                                            {expandedItem.shortDescription}
                                        </p>

                                        {expandedItem.fullDescription && (
                                            <p className="text-gray-200 leading-relaxed mb-8">
                                                {expandedItem.fullDescription}
                                            </p>
                                        )}

                                    </div>

                                    <div className='mb-8'>
                                        <h3 className='text-pacific-cyan font-bold text-xl mb-4 text-center'>
                                            Technologies
                                        </h3>
                                        <div className="flex flex-wrap gap-3 justify-center">
                                            {expandedItem.technologies.map(function(tech, techIndex){
                                                return(
                                                    <span
                                                        key={techIndex}
                                                        className="px-4 py-2 bg-rich-cerulean/80 backdrop-blur-sm text-white rounded-full"
                                                    >
                                                        {tech}
                                                    </span>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {expandedItem.achievements && expandedItem.achievements.length > 0 && (
                                        <div className="mb-8">
                                            <h3 className="text-pacific-cyan font-bold text-xl mb-4 text-center">
                                                Key Achievements
                                            </h3>
                                            <ul className='space-y-3'>
                                                {expandedItem.achievements.map(function(achievements, achIndex) {
                                                    return(
                                                        <li key={achIndex} className='text-gray-200 flex items-start'>
                                                            <span className='text-cherry-rose mr-3 text-xl'>
                                                                ▹
                                                            </span>
                                                            <span className='text-lg'>
                                                                {achievements}
                                                            </span>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                    )}

                                </div>
                            </div>    
                        </div>
                    )
                })()
            )}
                    
        </section>
    )

}

export default Timeline;           
