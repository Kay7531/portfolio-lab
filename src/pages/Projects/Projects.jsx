import ProjectsList from "../../components/ProjectsList";
import { projects } from "../../data/projects";

const Projects = () => {
    return (
        <>
        <h1>Projects</h1>
        <ul>
            {projects.map((project,idx) =>(
               <ProjectsList key={idx} project={project}/>
            ))}
        </ul>
        </>
    );
}

export default Projects