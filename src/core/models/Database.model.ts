export default interface Database {
  projects: Project[],
  experiences: Experience[]
}

export interface Project {
  imgUrl: string,
  title: string,
  link: string
}

export interface Experience {
  iconUrl: string,
  title: string,
  time: string,
  description: string
}
