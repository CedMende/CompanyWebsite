export interface Author {
  name: string;
  role: string;
  avatar: string;
}
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: Author;
  date: string;
  readTime: number;
  tags: string[];
  socialSource: "facebook" | "twitter" | null;
}