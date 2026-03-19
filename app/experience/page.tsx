import Link from "next/link";

export default function ExperiencePage() {
  const navItems: { label: string; href: string }[] = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

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
                item.label === "Experience"
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
            Experience
          </h1>
          <p className="mt-4 text-slate-500 text-base md:text-lg max-w-2xl mx-auto leading-7">
            My professional experience reflects my background in operations,
            product management, business analysis, and data-driven problem
            solving.
          </p>
        </section>

        <section className="space-y-8">
          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 px-6 md:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  User Operations Specialist
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                  Shanghai Yuelu Culture Development Co., Ltd · Shanghai, China
                </p>
              </div>

              <p className="text-sm md:text-base font-medium text-slate-500">
                May 2023 - Sep 2024
              </p>
            </div>

            <div className="mt-8">
              <SectionPill label="Experience Highlights" />
              <ul className="mt-4 list-disc pl-5 space-y-3 text-slate-600 leading-8 text-base">
                <li>
                  Collaborated with cross-functional teams to gather business
                  requirements and support the implementation of technology
                  solutions that improve operational efficiency.
                </li>
                <li>
                  Conducted business systems analysis to evaluate operational
                  workflows and recommend improvements in cloud infrastructure
                  and data security practices.
                </li>
                <li>
                  Analyzed operational data and identified process optimization
                  opportunities, contributing to a 10% improvement in workflow
                  efficiency.
                </li>
                <li>
                  Generated data insights to support data-driven decision-making
                  and improve service strategies for business clients.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <SectionPill label="Skills Demonstrated" />
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Business Analysis",
                  "Data Analysis",
                  "Cross-functional Collaboration",
                  "Cloud Infrastructure",
                  "Data Security",
                  "Process Optimization",
                  "Decision-Making Support",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 px-6 md:px-8 py-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
                  Product Manager
                </h2>
                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-400">
                  Shanghai Chibaole Information Technology Co., Ltd · Shanghai,
                  China
                </p>
              </div>

              <p className="text-sm md:text-base font-medium text-slate-500">
                July 2019 - Aug 2022
              </p>
            </div>

            <div className="mt-8">
              <SectionPill label="Experience Highlights" />
              <ul className="mt-4 list-disc pl-5 space-y-3 text-slate-600 leading-8 text-base">
                <li>
                  Provided consulting support to small businesses transitioning
                  to e-business platforms.
                </li>
                <li>
                  Assisted in the development of digital business strategies
                  that leveraged IT solutions to improve operational efficiency.
                </li>
                <li>
                  Conducted market research and analysis to support project
                  initiatives, resulting in recommendations that increased sales
                  performance by 24%.
                </li>
                <li>
                  Coordinated with suppliers and internal teams to ensure
                  alignment on project objectives and deliverables.
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <SectionPill label="Skills Demonstrated" />
              <div className="mt-4 flex flex-wrap gap-3">
                {[
                  "Product Management",
                  "Business Consulting",
                  "Digital Strategy",
                  "Market Research",
                  "Data Analysis",
                  "E-business Solutions",
                  "Stakeholder Coordination",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}