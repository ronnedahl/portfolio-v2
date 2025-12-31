
export interface ProfileData {
  name: string;
  age: number;
  role: string;
  education: string;
  previousExperience: string;
  skills: string[];
  projects: Project[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  imageUrl?: string;
}

export enum Tone {
  PROFESSIONAL = 'Professionell & Balanserad',
  TECH_HEAVY = 'Teknikfokuserad',
  STORY_DRIVEN = 'Berättande & Resan'
}
