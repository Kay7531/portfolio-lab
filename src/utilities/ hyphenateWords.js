import { projects } from "../data/projects"

function hyphenateWords(str) {
  return str.replace(/\s+/g, '-').toLowerCase()
}

export {
    hyphenateWords
}