
import ReactMarkdown from 'react-markdown';

interface ProjectCardProps {
    title: string;
    description: string;
    link?: string;
    imageUrl?: string;
    videoUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, link, imageUrl, videoUrl }) => {
    return (
        <div className="project-card">
            <div className="project-card-media">
                {videoUrl ? (
                    <video
                        src={videoUrl}
                        autoPlay
                        loop
                        muted
                        />
                ) : (
                    imageUrl && <img src={imageUrl} alt={title}/>
                )}
                </div>
            <div className="project-card-content">
                <h3 className="project-card-title">{title}</h3>
                <div className="project-card-description">
                    <ReactMarkdown>{description}</ReactMarkdown>
                </div>
                {link && <a href={link} className="project-card-link">Learn More</a>}
            </div>
        </div>
    );
}

export default ProjectCard;