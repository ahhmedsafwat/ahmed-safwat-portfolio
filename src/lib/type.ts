export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  images: Images;
  link: string;
  gitHub: string;
  date: string;
}

export interface Images {
  home: string;
  mobile: string;
  desktop: string;
  desktopLight?: string;
  mobileLight?: string;
  rest: string[];
}
