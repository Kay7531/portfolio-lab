import { projects } from "../data/projects"
import { hyphenateWords } from "./ hyphenateWords"


function findProject(str) {
    return projects.find(project => {
      return hyphenateWords(project.title) === str
    })
  }

  export{
    findProject
  }