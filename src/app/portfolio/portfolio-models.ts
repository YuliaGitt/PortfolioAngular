export interface Project {
  id: number;
  name: string;
  description: string;
  skills: Skill[];
  num_of_ratings: number;
  avg_ratings: number;
}
export interface Education {
  id: number;
  institution: string;
  description: string;
  projects: Project[];
  skills: Skill[];
}
export interface Skill {
  id: number;
  name: string;
}
