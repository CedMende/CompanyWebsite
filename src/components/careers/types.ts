export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
}
export interface EmployeeTestimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
  yearsAtCompany: number;
}