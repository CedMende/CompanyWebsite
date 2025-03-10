import React from "react";
import { ExternalLink, Clock, ArrowUpRight } from "lucide-react";
import { Project } from "./types";
const projects: Project[] = [{
  id: "hospital-management-system",
  title: "Modern Hospital Management System",
  client: "Regional Healthcare Network",
  category: "Healthcare",
  thumbnail: "https://images.unsplash.com/photo-1538108149393-fbbd81895907?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  heroImage: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  description: "A comprehensive hospital management system designed to streamline healthcare operations, patient care, and administrative tasks.",
  problem: "Traditional paper-based systems and outdated software causing inefficiencies in hospital operations and patient care management.",
  solution: "Implementing a modern, integrated hospital management system with real-time updates and comprehensive modules for all hospital operations.",
  technologies: ["React", "TypeScript", "Node.js", "MySQL", "Laravel", "Tailwind CSS"],
  features: ["Electronic Health Records", "Patient Management", "Appointment Scheduling", "Pharmacy Management", "Laboratory Management", "Billing & Insurance"],
  results: [{
    metric: "Development Progress",
    value: "40%",
    description: "Backend development in progress, frontend near completion"
  }, {
    metric: "Expected Completion",
    value: "Q3 2025",
    description: "Full system deployment"
  }],
  testimonial: {
    quote: "The modern interface and comprehensive features of this system will greatly improve our hospital's efficiency.",
    author: "Dr. Maria Santos",
    role: "Medical Director",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
}, {
  id: "hospital-hr-management",
  title: "Hospital HR Management System",
  client: "Metropolitan Medical Center",
  category: "Healthcare",
  thumbnail: "https://images.unsplash.com/photo-1516841273335-e39b37888115?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
  heroImage: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  description: "A tailored HR management system for healthcare institutions to manage medical staff, credentials, scheduling, and compliance.",
  problem: "Complex scheduling requirements, credential management, and compliance tracking creating administrative burdens for healthcare HR departments.",
  solution: "Developing a specialized HR platform that addresses the unique needs of hospital staff management, including medical credential tracking and shift scheduling.",
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
  features: ["Medical Credential Management", "Shift Scheduling & Coverage", "Compliance Tracking", "Performance Reviews", "Continuing Education", "Recruitment Portal"],
  results: [{
    metric: "Development Progress",
    value: "55%",
    description: "Core modules completed, integration with scheduling in progress"
  }, {
    metric: "Expected Launch",
    value: "Q2 2025",
    description: "Phased implementation beginning with staffing module"
  }],
  testimonial: {
    quote: "This system will transform how we manage our most valuable asset - our healthcare professionals. The credential tracking alone will save countless hours.",
    author: "Elena Rivera",
    role: "HR Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
}, {
  id: "city-treasury-kiosk",
  title: "City Treasury Kiosk System",
  client: "City Government",
  category: "Government",
  thumbnail: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  heroImage: "https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  description: "Advanced queueing system for the city treasury department to streamline citizen services and reduce wait times.",
  problem: "Long queues and inefficient service delivery causing frustration among citizens and staff.",
  solution: "Implementing a modern kiosk-based queueing system with real-time monitoring and analytics.",
  technologies: ["React", "TypeScript", "Node.js", "MySQL", "Laravel", "Tailwind CSS"],
  features: ["Touch-screen Interface", "Queue Management", "Service Categories", "Real-time Monitoring", "Analytics Dashboard", "SMS Notifications"],
  results: [{
    metric: "Development Progress",
    value: "40%",
    description: "Frontend complete, awaiting kiosk hardware"
  }, {
    metric: "Expected Launch",
    value: "Q2 2025",
    description: "Pending equipment delivery"
  }],
  testimonial: {
    quote: "This system will revolutionize how we manage citizen services in our treasury department.",
    author: "Roberto Cruz",
    role: "City Treasurer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
}, {
  id: "tourism-website",
  title: "City Tourism Website",
  client: "Local Government Tourism Office",
  category: "Government",
  thumbnail: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  heroImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  description: "Modern, responsive tourism website showcasing local attractions and facilitating visitor engagement.",
  problem: "Outdated online presence limiting tourism potential and visitor information access.",
  solution: "Building an interactive tourism portal with comprehensive information, virtual tours, and event management.",
  technologies: ["React", "Tailwind CSS", "Node.js", "Express"],
  features: ["Interactive Maps", "Event Calendar", "Attraction Listings", "Booking Integration"],
  results: [{
    metric: "Development Progress",
    value: "75%",
    description: "Frontend and core features completed"
  }, {
    metric: "Expected Launch",
    value: "Q2 2025",
    description: "Public website launch"
  }],
  testimonial: {
    quote: "TechPro360 is creating exactly what we envisioned for our tourism portal. The design is beautiful and user-friendly.",
    author: "Juan Reyes",
    role: "Tourism Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
}, {
  id: "loan-management",
  title: "Municipal Loan Management System",
  client: "City Financial Department",
  category: "Government",
  thumbnail: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  heroImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80",
  description: "Web-based loan management system for tracking municipal loans, payments, and financial reporting.",
  problem: "Inefficient loan tracking and management leading to reporting delays and administrative overhead.",
  solution: "Developing a comprehensive loan management platform with automated payment tracking and reporting.",
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"],
  features: ["Loan Application Processing", "Payment Tracking", "Automated Reminders", "Financial Reporting"],
  results: [{
    metric: "Development Progress",
    value: "50%",
    description: "Database structure and core logic implemented"
  }, {
    metric: "Expected Completion",
    value: "Q4 2025",
    description: "Full system deployment"
  }],
  testimonial: {
    quote: "The loan management system being developed will greatly improve our financial operations and reporting capabilities.",
    author: "Ana Gomez",
    role: "Financial Director",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80"
  }
}];
interface ProjectGridProps {
  onProjectSelect: (project: Project) => void;
}
const ProjectGrid: React.FC<ProjectGridProps> = ({
  onProjectSelect
}) => {
  return <section id="current-projects" className="w-full bg-gray-50 dark:bg-gray-800 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Our Current Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl">
            We're actively working on these innovative solutions for our
            clients. Each project represents our commitment to delivering
            high-quality technology that addresses real business needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map(project => <div key={project.id} className="group relative flex flex-col bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300" onClick={() => onProjectSelect(project)}>
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={project.thumbnail} alt={project.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-gray-900/0 transition-opacity duration-300" />
                <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2">
                  <Clock size={14} className="text-violet-600 dark:text-violet-400" />
                  <span className="text-xs font-medium text-gray-800 dark:text-gray-200">
                    In Progress
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-white px-2.5 py-0.5 rounded-full bg-violet-600/90 backdrop-blur-sm">
                      {project.category}
                    </span>
                    <span className="text-sm font-medium text-white px-2.5 py-0.5 rounded-full bg-orange-500/90 backdrop-blur-sm">
                      {project.results[0].value} Complete
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex-1 p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Client: {project.client}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, idx) => <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                      {tech}
                    </span>)}
                  {project.technologies.length > 3 && <span className="text-xs bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-md">
                      +{project.technologies.length - 3} more
                    </span>}
                </div>
              </div>
              <div className="p-4 pt-0 mt-auto">
                <button onClick={() => onProjectSelect(project)} className="w-full flex items-center justify-center gap-2 text-violet-700 dark:text-violet-400 font-medium hover:text-violet-800 dark:hover:text-violet-300 py-2 border border-violet-200 dark:border-violet-700/50 rounded-lg group-hover:bg-violet-50 dark:group-hover:bg-violet-900/20 transition-colors">
                  View Project Details
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default ProjectGrid;