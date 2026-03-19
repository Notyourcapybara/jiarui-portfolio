import Link from "next/link";

export default function HomePage() {
  const navItems = [
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Resume", href: "/resume" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 relative overflow-hidden">
      {/* Background text */}
      <div className="pointer-events-none absolute bottom-10 w-full flex items-end justify-center opacity-[0.06] -z-10">
        <h1 className="text-7xl md:text-9xl font-bold tracking-tight select-none">
          Hello World;
        </h1>
      </div>

      {/* Top navigation */}
      <header className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-4">
        <nav className="flex flex-wrap items-center justify-center gap-3 rounded-full bg-white/85 backdrop-blur-md px-4 py-3 shadow-sm border border-slate-200">
          <Link
            href="/"
            className="px-5 py-2 rounded-full text-sm md:text-base font-medium bg-slate-800 text-white shadow"
          >
            Home
          </Link>

          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="px-5 py-2 rounded-full text-sm md:text-base font-medium bg-slate-100 text-slate-700 hover:bg-slate-200 transition-all duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      {/* Main hero section */}
      <main className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 text-center">
        <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden shadow-lg border-4 border-white bg-slate-200">
          <img
            src="/profile.jpg"
            alt="Jiarui Wang profile"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="mt-8 text-3xl md:text-5xl font-bold tracking-tight">
          Jiarui Wang
        </h1>

        <p className="mt-3 text-base md:text-xl text-slate-600 font-medium">
          Informatics Graduate Student | Data &amp; Cloud Analytics
        </p>

        <p className="mt-6 max-w-2xl text-sm md:text-lg text-slate-500 leading-7">
          Welcome to my digital portfolio. I am a Master&apos;s student in
          Informatics at Northeastern University Toronto, with a strong interest
          in data analytics, cloud technologies, and digital solutions that
          support better decision-making.
        </p>

        
      </main>
    </div>
  );
}