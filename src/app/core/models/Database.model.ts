import Experience from "./Experience.model"
import Project from "./Project.model"

export default interface Database {
  projects: Project[],
  experiences: Experience[]
}
