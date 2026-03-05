export interface ContactItem {
  type: string;
  value: string;
  url: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  company?: string;
  period: string;
  description: string[];
  techStack?: string[];
  blogLink?: string; // Optional link for "관련 기술 블로그"
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  description: string[];
}

export interface AboutSection {
  title: string;
  content: string;
}

export interface PortfolioData {
  profile: {
    name: string;
    role: string;
    email: string;
    github: string;
  };
  about: {
    mainTitle: string;
    sections: AboutSection[];
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  certifications: {
    name: string;
    issuer: string;
    date: string;
  }[];
  awards : {
    name: string;
    issuer: string;
    date: string;
  }[];
  contacts: ContactItem[];
}
