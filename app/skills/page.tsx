import Link from "next/link";
import {
  BarChart3,
  Cloud,
  LayoutDashboard,
  BriefcaseBusiness,
  Code2,
  Database,
  Globe,
  Blocks,
  Sparkles,
  Github,
  Container,
  FileCode2,
  ServerCog,
  Laptop,
  ChartColumn,
  HardDrive,
  CloudCog,
} from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills | Jiarui Wang",
};

export default function SkillsPage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  const coreExpertise = [
    {
      title: "Data Analytics",
      description: "Transforming data into meaningful insights that support informed decision-making.",
      icon: BarChart3,
    },
    {
      title: "Cloud Systems",
      description: "Understanding and building scalable cloud-based solutions across modern platforms.",
      icon: Cloud,
    },
    {
      title: "Dashboard Development",
      description: "Designing clean, user-focused dashboards that make analytics easier to understand.",
      icon: LayoutDashboard,
    },
    {
      title: "Business Analysis",
      description: "Bridging business needs and technology through structured analysis and solution thinking.",
      icon: BriefcaseBusiness,
    },
  ];

  const technicalGroups = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["Python", "SQL", "JavaScript"],
    },
    {
      title: "Data & Analytics",
      icon: Database,
      skills: [
        "Data Visualization",
        "API Integration",
        "Dashboard Development",
        "Database Design",
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "ASP.NET MVC", "Frontend Development"],
    },
  ];

  const toolsAndPlatforms = [
    { name: "Google Cloud", icon: CloudCog },
    { name: "AWS", icon: Cloud },
    { name: "Azure", icon: ServerCog },
    { name: "Power BI", icon: ChartColumn },
    { name: "Looker Studio", icon: LayoutDashboard },
    { name: "GitHub", icon: Github },
    { name: "Docker", icon: Container },
    { name: "MySQL", icon: Database },
    { name: "BigQuery", icon: HardDrive },
    { name: "VS Code", icon: FileCode2 },
    { name: "Git", icon: Github },
    { name: "Postman", icon: Laptop },
  ];

  const professionalStrengths = [
    "Business Analysis",
    "Project Coordination",
    "Team Collaboration",
    "Communication",
    "Problem Solving",
    "Requirements Analysis",
    "Stakeholder Communication",
    "Critical Thinking",
  ];

  const SectionHeader = ({
    icon: Icon,
    label,
  }: {
    icon: React.ElementType;
    label: string;
  }) => (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-800 text-white shadow-sm">
        <Icon size={20} />
      </div>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{label}</h2>
    </div>
  );

  const SkillTag = ({ skill }: { skill: string }) => (
    <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition-all duration-300 hover:bg-slate-200 hover:-translate-y-0.5">
      {skill}
    </span>
  );

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-hidden">

        {/* Background glow */}
<div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-slate-200 blur-[140px] opacity-30"></div>

<div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-slate-300 blur-[120px] opacity-20"></div>        
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
        <nav className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/85 backdrop-blur-md px-4 py-3 shadow-sm border border-slate-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                item.label === "Skills"
                  ? "bg-slate-800 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        {/* Page Header */}
        <section className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Skills
          </h1>
          <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-7">
            A summary of my technical knowledge, tools, and professional
            strengths developed through academic and project experience.
          </p>
        </section>

        {/* Core Expertise */}
        <section className="mb-24">
          <SectionHeader icon={Sparkles} label="Core Expertise" />
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {coreExpertise.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
                >
                  <div className="absolute inset-x-0 top-0 h-1 bg-slate-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-800 text-white shadow-sm transition-transform duration-300 group-hover:scale-105">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-slate-600 leading-7 text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Technical Stack */}
        <section className="mb-24">
          <SectionHeader icon={Code2} label="Technical Stack" />
          <div className="grid gap-6 lg:grid-cols-3">
            {technicalGroups.map((group) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 text-slate-800">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xl font-semibold">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {group.skills.map((skill) => (
                      <SkillTag key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Tools & Platforms */}
        <section className="mb-24">
          <SectionHeader icon={Blocks} label="Tools & Platforms" />
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {toolsAndPlatforms.map((tool) => {
              const Icon = tool.icon;

              return (
                <div
                  key={tool.name}
                  className="group rounded-3xl border border-slate-200 bg-white px-4 py-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 transition-all duration-300 group-hover:bg-slate-800 group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <p className="text-sm font-medium text-slate-700 leading-6">
                    {tool.name}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Professional Strengths */}
        <section className="mb-20">
          <SectionHeader
            icon={BriefcaseBusiness}
            label="Professional Strengths"
          />
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-md">
            <div className="flex flex-wrap gap-3">
              {professionalStrengths.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom Summary */}
        <section className="border-t border-slate-200 pt-10 text-center">
          <p className="max-w-3xl mx-auto text-slate-500 text-base md:text-lg leading-8">
            My skill set combines analytics, cloud technologies, system design,
            and professional collaboration to support the development of
            practical, data-driven digital solutions.
          </p>
        </section>
      </main>
    </div>
  );
}