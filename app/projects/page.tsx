"use client";

import Link from "next/link";
import { useState } from "react";

type ProjectVisual = {
  title: string;
  image: string;
  alt: string;
};

type ProjectLink = {
  label: string;
  url: string;
};

type Project = {
  id: number;
  title: string;
  projectDescription: string;
  role: string;
  skills: string[];
  visuals: ProjectVisual[];
  links?: ProjectLink[];
  reflection: string;
};

export default function ProjectsPage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "Decision-Driven Analytics Dashboard",
      projectDescription:
        "HINSIGHT is a cloud-based organizational wellbeing analytics dashboard designed to help stakeholders understand employee wellbeing trends through aggregated data and visual insights.",
      role:
        "My role focused on frontend development and frontend-backend integration, including dashboard layout, interaction design, and presenting analytics results clearly to users.",
      skills: [
        "Data Visualization",
        "Cloud Analytics",
        "Frontend Development",
        "API Integration",
        "RBAC",
      ],
      visuals: [
        {
          title: "Dashboard View",
          image: "/project/hinsight/dashboard.png",
          alt: "HINSIGHT dashboard screenshot",
        },
        {
          title: "Architecture Diagram",
          image: "/project/hinsight/architecture.png",
          alt: "HINSIGHT architecture diagram",
        },
      ],
      links: [
        {
          label: "View Demo",
          url: "https://hinsight-dashboard.vercel.app/",
        },
      ],
      reflection:
        "Through this project, I learned how to design a user-focused analytics dashboard and connect backend data with frontend visualization. It also strengthened my teamwork, communication, and project coordination skills. The project showed me how data dashboards can support better organizational decision-making.",
    },
    {
      id: 2,
      title: "AI Model Identification Platform",
      projectDescription:
        "This project focused on building a platform that can identify language models based on generated responses and organize related metadata such as model IDs, links, and references.",
      role:
        "My role included project collaboration, system planning, and helping define how the platform should present and organize model information for users.",
      skills: [
        "System Design",
        "Project Planning",
        "Metadata Organization",
        "AI Evaluation",
        "Research Analysis",
      ],
      visuals: [
        {
          title: "Workflow Diagram",
          image: "/project/ai-model/workflow.png",
          alt: "AI model platform workflow diagram",
        },
        {
          title: "Web Interface",
          image: "/project/ai-model/database.png",
          alt: "AI model platform web interface",
        },
      ],
      reflection:
        "This project helped me better understand AI evaluation systems and the importance of organizing technical information in a structured way. I also learned how a platform can balance technical functionality with usability and clear presentation.",
    },
    {
      id: 3,
      title: "Mood Music Web Application",
      projectDescription:
        "Mood Music is a web application that allows users to explore playlists based on mood and manage moods and songs through an interactive interface.",
      role:
        "My role focused on frontend design, page development, and connecting user interactions with backend functionality in an ASP.NET MVC environment.",
      skills: [
        "ASP.NET MVC",
        "UI Design",
        "JavaScript",
        "Frontend-Backend Integration",
        "Database Interaction",
      ],
      visuals: [
        {
          title: "Homepage",
          image: "/project/mood-music/homepage.png",
          alt: "Mood Music homepage screenshot",
        },
      ],
      reflection:
        "This project improved my confidence in building a complete web application interface and taught me how to turn user needs into practical features. I also learned how design details, such as layout and interaction flow, can improve the user experience.",
    },
    {
      id: 4,
      title: "Azure Data Pipeline Project",
      projectDescription:
        "This project involved building a data pipeline and analytics workflow using Azure services to process, store, and visualize data.",
      role:
        "My role included working on data flow design, analytics logic, and connecting processed results to reporting or dashboard outputs.",
      skills: [
        "Azure",
        "Data Pipeline Design",
        "Cloud Architecture",
        "Data Processing",
        "Analytics Reporting",
      ],
      visuals: [
        {
          title: "Pipeline Architecture",
          image: "/project/azure/pipeline.png",
          alt: "Azure data pipeline architecture",
        },
      ],
      reflection:
        "This project gave me practical experience with cloud-based data pipelines and helped me understand how raw data moves through processing stages into meaningful insights. It strengthened my ability to think about both technical structure and business value.",
    },
  ];

  const [openProjectId, setOpenProjectId] = useState<number | null>(null);

  const [selectedImage, setSelectedImage] = useState<{
  src: string;
  alt: string;
  title: string;
  } | null>(null);

  const toggleProject = (id: number) => {
    setOpenProjectId((prev) => (prev === id ? null : id));
  };

  const SectionPill = ({ label }: { label: string }) => (
    <span className="inline-flex rounded-full bg-slate-800 px-5 py-2 text-base font-semibold text-white shadow-sm tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-md">
      {label}
    </span>
  );

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
        <nav className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/85 backdrop-blur-md px-4 py-3 shadow-sm border border-slate-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                item.label === "Projects"
                  ? "bg-slate-800 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-36 pb-20">
        <section className="text-center mb-14">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Projects
          </h1>
          <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-7">
            Here are selected academic and project works that reflect my
            experience in data analytics, cloud systems, web development, and
            digital solution design.
          </p>
        </section>

        <section className="space-y-6">
          {projects.map((project) => {
            const isOpen = openProjectId === project.id;

            return (
              <div
                key={project.id}
                className={`rounded-3xl border transition-all duration-300 ${
                  isOpen
                    ? "border-slate-800 bg-slate-50 shadow-md"
                    : "border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md"
                }`}
              >
                <button
                  onClick={() => toggleProject(project.id)}
                  className="w-full text-left px-6 md:px-8 py-5 flex items-center justify-between rounded-3xl transition-all duration-300 hover:bg-slate-50"
                >
                  <h2 className="text-xl md:text-2xl font-semibold">
                    {project.title}
                  </h2>

                  <span
                    className={`text-2xl font-light transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div
                      className={`px-6 md:px-8 pb-8 pt-2 space-y-8 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                        isOpen
                          ? "translate-y-0 scale-100"
                          : "-translate-y-2 scale-[0.98]"
                      }`}
                    >
                      <div>
                        <SectionPill label="Project Description" />
                        <p className="mt-4 text-slate-600 leading-8">
                          {project.projectDescription}
                        </p>
                      </div>

                      <div>
                        <SectionPill label="Role" />
                        <p className="mt-4 text-slate-600 leading-8">
                          {project.role}
                        </p>
                      </div>

                      <div>
                        <SectionPill label="Key Skills" />
                        <div className="mt-4 flex flex-wrap gap-3">
                          {project.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <SectionPill label="Visuals" />

                        <div className="mt-4 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                          {project.visuals.map((visual) => (
                            <button
  key={visual.title}
  type="button"
  onClick={() =>
    setSelectedImage({
      src: visual.image,
      alt: visual.alt,
      title: visual.title,
    })
  }
  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md text-left"
>
  <div className="aspect-[16/10] bg-slate-100 overflow-hidden">
    <img
      src={visual.image}
      alt={visual.alt}
      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
    />
  </div>
  <div className="px-4 py-3">
    <p className="text-sm font-medium text-slate-700">
      {visual.title}
    </p>
  </div>
</button>
                          ))}
                        </div>

                        {project.links && project.links.length > 0 && (
                          <div className="mt-5 flex flex-wrap gap-3">
                            {project.links.map((link) => (
                              <a
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-100 hover:-translate-y-0.5"
                              >
                                {link.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>

                      <div>
                        <SectionPill label="Reflection and Impact" />
                        <p className="mt-4 text-slate-600 leading-8">
                          {project.reflection}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </section>
      </main>
      {selectedImage && (
  <div
    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 py-8"
    onClick={() => setSelectedImage(null)}
  >
    <div
      className="relative max-w-6xl w-full rounded-3xl bg-white p-4 md:p-6 shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        type="button"
        onClick={() => setSelectedImage(null)}
        className="absolute right-4 top-4 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700 hover:bg-slate-200 transition"
      >
        Close
      </button>

      <div className="mb-4 pr-20">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-800">
          {selectedImage.title}
        </h3>
      </div>

      <div className="overflow-auto rounded-2xl border border-slate-200 bg-slate-50">
        <img
          src={selectedImage.src}
          alt={selectedImage.alt}
          className="w-full h-auto object-contain max-h-[80vh]"
        />
      </div>
    </div>
  </div>
)}
    </div>
  );
}