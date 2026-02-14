import {useState} from 'react'
import {colors} from '../theme/colors.js';

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

    // const expandedItem = items.find(function(item) {
    //     setExpandedId(null);
    // });

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
                    {items.map(function(item,index){
                        let isLeft, className;
                        let badgeClassName, badgeText;

                        if (index %2 === 0){
                            isLeft = true;
                        }else{
                            isLeft = false;
                        }

                        if (isLeft) {
                            className = "relative mb-12 md:flex md:justify-end md:pr-[calc(50%+24px)]";
                        }else{
                            className = "relative mb-12 md:flex md:justify-start md:pl-[calc(50%+24px)]";                           
                        }

                        if (item.type === 'work'){
                            badgeClassName = 'inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-1 bg-cherry-rose text-white';
                            badgeText = 'Work';
                        }else{
                            badgeClassName = 'inline-block px-2 py-0.5 text-xs font-semibold rounded-full mb-1 bg-pacific-cyan text-white';
                            badgeText = 'Project';
                        }   

                        return (
                            <div
                                key={item.id}
                                className={className}
                            >
                                {/* dots */}
                                <div className={
                                    `absolute left-8 md:left-1/2 top-1/2 transfor, -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cherry-rose shadow-[0_0_15px_rgba(183,9,76,0.8)] z-10`}>
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
                                                    style={{objectPosition: 'center 35%'}}
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
        </section>
    )

}

export default Timeline;