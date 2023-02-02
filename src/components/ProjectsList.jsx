
import ProjectPreview from "./ProjectPreview";

const ProjectsList = (props) => {
    return (
        <>
     
        <ul>
            
               <ProjectPreview title={props.project.title}/>
            
        </ul>
        </>
    );
}

export default ProjectsList