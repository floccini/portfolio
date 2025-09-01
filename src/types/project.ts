export interface ProjectProps {
  project: {
    title: string;
    description: string;
    tech: { name: string; color: string }[];
    link: string;
  };
}
