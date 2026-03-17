import Link from "next/link";
import { FileText, Eye, Download } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume | Jiarui Wang",
};
export default function ResumePage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  const SectionHeader = ({
    icon: Icon,
    label,
  }: {
    icon: React.ElementType;
    label: string;
  }) => (
    <div className="flex items-center justify-center gap-3 mb-6">
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
                item.label === "Resume"
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
        <section className="text-center mb-12">
          <SectionHeader icon={FileText} label="Resume" />

          <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-7">
            You can view or download my most recent resume to learn more about
            my academic background, technical skills, and project experience.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-slate-800 px-6 py-3 text-white font-medium shadow transition-all duration-300 hover:bg-slate-700 hover:-translate-y-0.5"
            >
              <Eye size={18} />
              View Resume
            </a>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-slate-700 font-medium transition-all duration-300 hover:bg-slate-100 hover:-translate-y-0.5"
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </section>

        {/* Resume Preview */}
        <section className="rounded-3xl border border-slate-200 bg-white p-4 md:p-6 shadow-sm">
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
            <iframe
              src="/resume.pdf"
              title="Resume Preview"
              className="w-full h-[900px]"
            />
          </div>
        </section>

        {/* Bottom note */}
        <section className="mt-12 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-500 text-base md:text-lg leading-8 max-w-3xl mx-auto">
            My resume reflects my academic training, project experience, and
            growing expertise in data analytics, cloud technologies, and
            digital solution development.
          </p>
        </section>
      </main>
    </div>
  );
}