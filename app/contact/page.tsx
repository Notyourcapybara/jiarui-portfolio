import Link from "next/link";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Jiarui Wang",
};

export default function ContactPage() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  const contacts = [
    {
      title: "Email",
      value: "wjr970324@gmail.com",
      link: "mailto:wjr970324@gmail.com",
      icon: Mail,
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/jiarui-w",
      link: "https://linkedin.com/in/jiarui-w",
      icon: Linkedin,
    },
    {
      title: "GitHub",
      value: "github.com/Notyourcapybara",
      link: "https://github.com/Notyourcapybara",
      icon: Github,
    },
    {
      title: "Location",
      value: "Toronto, Canada",
      link: null,
      icon: MapPin,
    },
  ];

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
                item.label === "Contact"
                  ? "bg-slate-800 text-white shadow"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pt-36 pb-24">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact
          </h1>
          <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-7">
            Thank you for visiting my portfolio. Feel free to reach out for
            networking, collaboration, or professional opportunities.
          </p>
        </section>

        {/* Contact Cards */}
        <section className="grid gap-6 sm:grid-cols-2">
          {contacts.map((item) => {
            const Icon = item.icon;

            const CardContent = (
              <div className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-800 transition-all duration-300 group-hover:bg-slate-800 group-hover:text-white">
                  <Icon size={22} />
                </div>

                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

                <p className="text-slate-600 break-all">{item.value}</p>
              </div>
            );

            return item.link ? (
              <a
                key={item.title}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {CardContent}
              </a>
            ) : (
              <div key={item.title}>{CardContent}</div>
            );
          })}
        </section>

        {/* Bottom summary */}
        <section className="mt-16 text-center border-t border-slate-200 pt-10">
          <p className="text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-8">
            I am always open to connecting with professionals, recruiters, and
            collaborators in data analytics, cloud technologies, and digital
            innovation.
          </p>
        </section>
      </main>
    </div>
  );
}