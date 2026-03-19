import Link from "next/link";
import { User, GraduationCap, Target } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Jiarui Wang",
};

export default function AboutPage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  const focusAreas = [
    "Data Analytics",
    "Cloud Technologies",
    "Business Intelligence",
    "Digital Solutions",
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

  return (
    <div className="relative min-h-screen bg-white text-slate-800 overflow-hidden">
      {/* soft background glow */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[420px] w-[420px] rounded-full bg-slate-200 blur-[140px] opacity-20"></div>
      <div className="pointer-events-none absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-slate-300 blur-[120px] opacity-20"></div>

      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
        <nav className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/85 backdrop-blur-md px-4 py-3 shadow-sm border border-slate-200">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-200 ${
                item.label === "About"
                  ? "bg-slate-800 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-6 pt-36 pb-24">
        {/* Page Header */}
        <section className="text-center mb-16">
          <div className="mx-auto mb-6 w-36 h-36 rounded-full overflow-hidden shadow-lg border-4 border-white bg-slate-200">
            <img
              src="/profile.jpg"
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            About Me
          </h1>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <SectionHeader icon={User} label="Introduction" />

          <p className="text-slate-600 leading-8 text-base md:text-lg">
            I am an Informatics graduate student at Northeastern University with
            a background in Computer Science and a strong interest in data
            analytics, cloud technologies, and digital solutions. My academic
            and project experience focuses on transforming data into meaningful
            insights and building practical systems that support better
            decision-making.
          </p>
        </section>

        {/* Background */}
        <section className="mb-16">
          <SectionHeader icon={GraduationCap} label="Background" />

          <p className="text-slate-600 leading-8 text-base md:text-lg">
            I completed my undergraduate studies in Computer Science and
            Technology and am currently pursuing a Master's degree in
            Informatics. Through coursework and projects, I have developed
            experience in data analytics, cloud systems, web development, and
            business-oriented digital solutions.
          </p>
        </section>

        {/* Focus Areas */}
        <section className="mb-16">
          <SectionHeader icon={Target} label="Focus Areas" />

          <div className="grid gap-4 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <p className="text-lg font-medium text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Personal Note */}
        <section className="border-t border-slate-200 pt-10 text-center">
          <p className="text-slate-500 text-base md:text-lg leading-8">
            I am passionate about combining technology, data, and business
            understanding to create meaningful digital solutions that solve real
            problems.
          </p>
        </section>
      </main>
    </div>
  );
}