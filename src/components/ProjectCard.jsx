function ProjectCard({project}){
    
    let imageNode;
    if (project.image) {
        if (typeof project.image === 'string') {
            imageNode = (
                <img
                    src={project.image}
                    alt={project.title}
                    className='w-full h-full object-cover'
                />
            );
        } else {
            imageNode = project.image;
        }
    } else {
        imageNode = <div className='text-gray-500'>Comming Soon... </div>;
    }

  
    let githubLink = null;
    if (project.github) {
        githubLink = (
            <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-dusk-blue border border-cerulean text-white text-center rounded hover:bg-gray-700 transition-colors"
            >Github</a>
        );
    }

    let demoLink = null;
    if (project.demo) {
        demoLink = (
            <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-4 py-2 bg-cherry-rose text-white text-center rounded hover:bg-dark-raspberry transition-colors"
            >Demo</a>
        );
    }
    return(
        <div className = "bg-gray-900 border-2 border-rich-cerulean rounded-lg p-6 hover:border-cherry-rose transition-all hover:scale-105 transform duration-300 relative overflow-hidden group">
            
            <div className="absolute top-0 left-0 w-8 h-8 border-l-4  border-t-4 border-pacific-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-pacific-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-pacific-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-4 border-r-4 border-pacific-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            <div className="bg-gray-800 rounded-lg mb-4 h-48 flex items-center justify-center overflow-hidden">
                {imageNode}
            </div>

            <h3 className="text-xl font-bold text-pacific-cyan mb-2 font-mono">
                {project.title}
            </h3>

            <p className="text-gray-300 mb-4 line-clamp-3 font-mono">
                {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map(function(tech, index){
                    return (
                        <span
                            key={index}
                            className="px-2 py-2 bg-rich-cerulean text-white text-xs rounded-full"
                        >
                            {tech}
                        </span>
                    );
                })}
            </div>

            <div className="flex gap-3">
                {githubLink}
                {demoLink}
            </div>
        </div>
    )
}

export default ProjectCard;