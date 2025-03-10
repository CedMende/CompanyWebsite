export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  heroImage: string;
  description: string;
  problem: string;
  solution: string;
  technologies: string[];
  features: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    image: string;
  };
}