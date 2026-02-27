function ProjectCard({project}){
    return(
        <div className = "bg-gray-900 border-2 border-rich-cerulean rounded-lg p-6 hover:border-cherry-rose transition-all hover:scale-105 transform duration-300 relative overflow-hidden group">
            
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
        </div>
    )
}

export default ProjectCard;