
interface Project {
  name: string;
  description: string;
  image: string;
  labels: string[];
}

interface Props {
  projects: Project[];
}

const Project = ({ projects }: Props) => {
  const renderProjectCards = () => {
    return projects.map((project, index) => (
      <div key={index} className="card">
        <img src={project.image} className="card-img-top" alt={project.name} />
        <div className="card-body">
          <h5 className="card-title">{project.name}</h5>
          <p className="card-text">{project.description}</p>
          <div className="labels">
            {project.labels.map((label, labelIndex) => (
              <span key={labelIndex} className="badge bg-secondary">{label}</span>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div style={{ 
      fontFamily: 'Trebuchet MS',
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '20px',
      padding: '0 25px',
      backgroundColor: '#333',
      color: '#f0f0f0',
    }}>
      {renderProjectCards()}
    </div>
  );
};

export default Project;