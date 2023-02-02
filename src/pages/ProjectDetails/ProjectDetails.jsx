import { projects } from "../../data/projects";
import { Routes,Route, useParams } from "react-router-dom";
import { useEffect } from "react";
import { findProject } from "../../utilities/ findProject";

const ProjectDetails = () => {

  const { projectDetails } = useParams()
  const thisProject = findProject(projectDetails)
    return (
        <>
        <h1>{thisProject.title}</h1>
       <p>{thisProject.description}</p>
       <img src= {thisProject.image} alt={thisProject.title} />
        </>
    );
}

export default ProjectDetails