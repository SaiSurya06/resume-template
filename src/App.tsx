import React from 'react';
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  Briefcase,
  GraduationCap,
  Award,
  Code,
  Languages,
  ExternalLink,
} from 'lucide-react';

interface WorkExperience {
  title: string;
  company: string;
  startYear: string;
  endYear: string;
  description: string[];
}

interface Project {
  title: string;
  github: string;
  deployment?: string;
  description: string[];
}

interface Education {
  degree: string;
  institution: string;
  startYear: string;
  endYear: string;
}

interface ResumeData {
  name: string;
  title: string;
  contact: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
  };
  summary: string;
  workExperience: WorkExperience[];
  projects: Project[];
  education: Education[];
  skills: string[];
  languages: string[];
  achievements: string[];
}

// Sample resume data
const resumeData: ResumeData = {
  name: "Jane Doe",
  title: "Senior Software Engineer",
  contact: {
    email: "jane.doe@example.com",
    phone: "+1 234 567 8900",
    linkedin: "linkedin.com/in/janedoe",
    github: "github.com/janedoe"
  },
  summary: "Experienced software engineer with 8+ years of expertise in full-stack development, specializing in React, Node.js, and cloud technologies. Passionate about creating scalable solutions and mentoring junior developers.",
  workExperience: [
    {
      title: "Senior Software Engineer",
      company: "Tech Solutions Inc.",
      startYear: "2020",
      endYear: "Present",
      description: [
        "Led a team of 5 developers in developing a cloud-based analytics platform",
        "Improved application performance by 40% through code optimization",
        "Implemented CI/CD pipelines reducing deployment time by 60%"
      ]
    },
    {
      title: "Software Engineer",
      company: "Digital Innovations Ltd",
      startYear: "2018",
      endYear: "2020",
      description: [
        "Developed and maintained multiple React-based web applications",
        "Collaborated with UX team to implement responsive designs",
        "Mentored junior developers and conducted code reviews"
      ]
    }
  ],
  projects: [
    {
      title: "E-commerce Platform",
      github: "github.com/janedoe/ecommerce",
      deployment: "ecommerce-platform.com",
      description: [
        "Built a full-stack e-commerce platform using React, Node.js, and MongoDB",
        "Implemented secure payment processing with Stripe",
        "Integrated real-time inventory management system"
      ]
    },
    {
      title: "Task Management App",
      github: "github.com/janedoe/task-manager",
      deployment: "task-manager-app.com",
      description: [
        "Created a collaborative task management application",
        "Implemented real-time updates using WebSocket",
        "Designed and implemented REST API"
      ]
    }
  ],
  education: [
    {
      degree: "Master of Science in Computer Science",
      institution: "Tech University",
      startYear: "2016",
      endYear: "2018"
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Engineering College",
      startYear: "2012",
      endYear: "2016"
    }
  ],
  skills: [
    "React", "Node.js", "TypeScript", "Python",
    "AWS", "Docker", "GraphQL", "MongoDB",
    "Redux", "Jest", "CI/CD", "Agile"
  ],
  languages: ["English (Native)", "Spanish (Intermediate)", "French (Basic)"],
  achievements: [
    "Best Innovation Award 2022 - Tech Solutions Inc.",
    "Published 3 technical articles on Medium",
    "Speaker at React Conference 2021",
    "Open Source Contributor - 100+ contributions"
  ]
};

function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-blue-600 text-white px-8 py-12">
          <h1 className="text-4xl font-bold">{resumeData.name}</h1>
          <h2 className="text-xl mt-2">{resumeData.title}</h2>
          
          <div className="flex flex-wrap gap-4 mt-4">
            <a href={`mailto:${resumeData.contact.email}`} className="flex items-center gap-2">
              <Mail size={18} />
              {resumeData.contact.email}
            </a>
            <a href={`tel:${resumeData.contact.phone}`} className="flex items-center gap-2">
              <Phone size={18} />
              {resumeData.contact.phone}
            </a>
            <a href={`https://${resumeData.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Linkedin size={18} />
              LinkedIn
            </a>
            <a href={`https://${resumeData.contact.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github size={18} />
              GitHub
            </a>
          </div>
        </div>

        <div className="px-8 py-8">
          {/* Summary Section */}
          <section className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">About Me</h3>
            <p className="text-gray-700 leading-relaxed">{resumeData.summary}</p>
          </section>

          {/* Work Experience Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-blue-600" />
              <h3 className="text-2xl font-semibold">Work Experience</h3>
            </div>
            <div className="space-y-6">
              {resumeData.workExperience.map((work, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h4 className="text-xl font-semibold">{work.title}</h4>
                  <p className="text-gray-600">{work.company}</p>
                  <p className="text-gray-500 text-sm">{work.startYear} - {work.endYear}</p>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    {work.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-blue-600" />
              <h3 className="text-2xl font-semibold">Projects</h3>
            </div>
            <div className="space-y-6">
              {resumeData.projects.map((project, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h4 className="text-xl font-semibold">{project.title}</h4>
                  <div className="flex gap-4 mt-1">
                    <a href={`https://${project.github}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1">
                      <Github size={16} />
                      GitHub
                    </a>
                    {project.deployment && (
                      <a href={`https://${project.deployment}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 flex items-center gap-1">
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    )}
                  </div>
                  <ul className="mt-2 list-disc list-inside text-gray-700">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-blue-600" />
              <h3 className="text-2xl font-semibold">Education</h3>
            </div>
            <div className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div key={index} className="border-l-2 border-blue-600 pl-4">
                  <h4 className="text-xl font-semibold">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                  <p className="text-gray-500 text-sm">{edu.startYear} - {edu.endYear}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-blue-600" />
              <h3 className="text-2xl font-semibold">Skills</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill, index) => (
                <span key={index} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Languages Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Languages className="text-blue-600" />
              <h3 className="text-2xl font-semibold">Languages</h3>
            </div>
            <div className="flex flex-wrap gap-4">
              {resumeData.languages.map((language, index) => (
                <span key={index} className="text-gray-700">{language}</span>
              ))}
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-blue-600" />
              <h3 className="text-2xl font-semibold">Achievements</h3>
            </div>
            <ul className="list-disc list-inside text-gray-700">
              {resumeData.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;