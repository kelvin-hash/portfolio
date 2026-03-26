import Link from "next/link";
import { HomeActionButton } from "./components/home-action-button";
import {
  certificates,
  education,
  projectCount,
  projects,
  skillGroups,
} from "./data/portfolio";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.10),_transparent_35%),linear-gradient(180deg,_#fffefb_0%,_#fffaf3_48%,_#fdf6ed_100%)] text-stone-900">
      <section className="mx-auto flex w-full max-w-7xl flex-col px-6 pb-20 pt-6 sm:px-10 lg:px-12">
        <header className="mb-16 flex flex-col gap-6 rounded-[2rem] border border-white/90 bg-white/85 px-6 py-5 shadow-[0_20px_60px_rgba(120,53,15,0.06)] backdrop-blur">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
                Kelvin Portfolio
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight">
                Full-Stack Engineer
              </h1>
              <p className="mt-2 text-sm text-stone-600">Nairobi, Kenya</p>
            </div>

            <div className="flex flex-wrap gap-3 text-sm">
              <a
                href="https://linkedin.com/in/your-linkedin"
                className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-stone-900 transition hover:border-amber-500 hover:bg-amber-100"
              >
                LinkedIn Link
              </a>
              <a
                href="https://github.com/kelvin-hash"
                className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-stone-900 transition hover:border-amber-500 hover:bg-amber-100"
              >
                GitHub Link
              </a>
              <HomeActionButton
                buttonLabel="Contact Me"
                modalEyebrow="Contact"
                modalTitle="Get in touch"
                className="rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-stone-900 transition hover:border-amber-500 hover:bg-amber-100"
              >
                <div className="rounded-[1.5rem] border border-amber-100 bg-white/90 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                    Phone
                  </p>
                  <a
                    href="tel:+254710497634"
                    className="mt-2 block text-lg font-semibold text-stone-950 transition hover:text-amber-700"
                  >
                    +254710497634
                  </a>
                </div>
                <div className="rounded-[1.5rem] border border-amber-100 bg-white/90 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                    Email
                  </p>
                  <a
                    href="mailto:kelvinmungai6954@gmail.com"
                    className="mt-2 block break-all text-lg font-semibold text-stone-950 transition hover:text-amber-700"
                  >
                    kelvinmungai6954@gmail.com
                  </a>
                </div>
              </HomeActionButton>
            </div>
          </div>

          <nav className="flex flex-wrap gap-3 text-sm text-stone-600">
            <a
              href="#skills"
              className="rounded-full px-4 py-2 hover:bg-stone-900 hover:text-white"
            >
              Skills
            </a>
            <a
              href="#projects"
              className="rounded-full px-4 py-2 hover:bg-stone-900 hover:text-white"
            >
              Projects
            </a>
            <a
              href="#certificates"
              className="rounded-full px-4 py-2 hover:bg-stone-900 hover:text-white"
            >
              Certificates
            </a>
            <a
              href="#education"
              className="rounded-full px-4 py-2 hover:bg-stone-900 hover:text-white"
            >
              Education
            </a>
          </nav>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-medium text-amber-800">
              Full stack engineer and RPA developer
            </div>
            <div className="space-y-6">
              <p className="max-w-xl text-sm uppercase tracking-[0.35em] text-stone-500">
                MERN / Next.js / Redis / UiPath
              </p>
              <h2 className="max-w-4xl text-5xl font-semibold leading-none tracking-[-0.04em] text-stone-950 sm:text-6xl lg:text-7xl">
                I build scalable web products and automated systems for real-world use.
              </h2>
              <p className="max-w-2xl text-lg leading-8 text-stone-600">
                My experience spans full stack development, real-time systems,
                backend architecture, serverless APIs, and process automation.
                This portfolio combines the work and technologies I have used in
                production-style projects.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
              >
                View Projects
              </a>
              <HomeActionButton
                buttonLabel="About Me"
                modalEyebrow="About"
                modalTitle="Who I am"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-950 hover:bg-white"
              >
                <p>
                  I am a full-stack engineer and RPA developer based in Nairobi,
                  Kenya, focused on building scalable web products and automated
                  systems for real-world use.
                </p>
                <p>
                  My work spans full stack development, real-time systems,
                  backend architecture, serverless APIs, and process automation,
                  with practical experience across MERN, Next.js, Redis, and
                  UiPath-based projects.
                </p>
                <p>
                  This portfolio brings together the projects, technologies, and
                  engineering patterns I have used to solve real product and
                  workflow problems.
                </p>
              </HomeActionButton>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="flex items-center justify-center rounded-[2rem] border border-amber-100 bg-white/90 p-8 shadow-[0_24px_70px_rgba(120,53,15,0.06)]">
              <div className="flex h-56 w-56 items-center justify-center rounded-full border-4 border-dashed border-amber-200 bg-[linear-gradient(180deg,_#fffdf8_0%,_#fff4df_100%)] text-center text-sm font-medium uppercase tracking-[0.2em] text-amber-700">
                Your Photo
              </div>
            </div>
            <div className="rounded-[2rem] border border-amber-100 bg-white/90 p-8 text-stone-900 shadow-[0_24px_70px_rgba(120,53,15,0.06)]">
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
                Snapshot
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
                <div className="rounded-3xl bg-amber-50 p-5">
                  <p className="text-4xl font-semibold text-stone-950">6</p>
                  <p className="mt-2 text-sm text-stone-600">
                    Skill groups covering frontend, backend, databases, tools,
                    and automation.
                  </p>
                </div>
                <div className="rounded-3xl bg-stone-50 p-5">
                  <p className="text-4xl font-semibold text-stone-950">
                    {projectCount}
                  </p>
                  <p className="mt-2 text-sm text-stone-600">
                    Featured projects across web apps, real-time systems, and
                    RPA.
                  </p>
                </div>
                <div className="rounded-3xl bg-amber-50 p-5">
                  <p className="text-4xl font-semibold text-stone-950">2026</p>
                  <p className="mt-2 text-sm text-stone-600">
                    BSc IT graduation target with hands-on engineering and
                    automation experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="mt-20 rounded-[2rem] border border-white/90 bg-white/85 p-8 shadow-[0_16px_50px_rgba(120,53,15,0.06)] backdrop-blur"
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
                Skills
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
                Grouped by the way I actually work
              </h3>
            </div>
            <p className="max-w-xl text-sm leading-7 text-stone-600">
              The stack below reflects the technologies I have used in real
              projects, not just a list of buzzwords. Each group represents a
              different aspect of my work, from frontend to backend to
              automation.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-[1.5rem] border border-amber-100 bg-amber-50/50 p-5"
              >
                <h4 className="text-lg font-semibold text-stone-950">
                  {group.title}
                </h4>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-amber-200 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
                Projects
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
                Real project experience and portfolio work
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-stone-600">
                Each card now links to its own project page with a deeper
                breakdown of the work, stack, and outcomes.
              </p>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-amber-100/80 bg-[linear-gradient(180deg,_rgba(255,255,255,0.98)_0%,_rgba(255,248,238,0.98)_100%)] p-6 shadow-[0_18px_45px_rgba(120,53,15,0.08)] transition duration-300 hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-[0_24px_60px_rgba(120,53,15,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.18),_transparent_32%)] opacity-80 transition duration-300 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-stone-500">
                      {project.type}
                    </p>
                    <span className="rounded-full border border-white/80 bg-white/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700 shadow-sm">
                      View
                    </span>
                  </div>

                  <h4 className="mt-5 text-2xl font-semibold tracking-tight text-stone-950 transition group-hover:text-amber-700">
                    {project.title}
                  </h4>

                  <p className="mt-4 text-sm leading-7 text-stone-600">
                    {project.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-amber-200 via-amber-100 to-transparent" />

                  <div className="mt-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
                      Stack
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.stack.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-stone-200 bg-white/90 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <div className="flex items-center justify-between rounded-[1.4rem] border border-stone-200/80 bg-white/90 px-4 py-3 text-sm text-stone-700 transition group-hover:border-amber-200 group-hover:bg-amber-50/70">
                      <span className="font-medium">Open project page</span>
                      <span className="text-lg leading-none transition-transform duration-300 group-hover:translate-x-1">
                        -&gt;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-20 grid gap-6 lg:grid-cols-2">
          <div
            id="certificates"
            className="rounded-[2rem] border border-amber-100 bg-white p-8 shadow-[0_14px_40px_rgba(120,53,15,0.06)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
              Certificates
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
              Professional validation
            </h3>
            <div className="mt-8 space-y-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate.name}
                  className="rounded-3xl border border-amber-100 bg-amber-50/50 p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h4 className="text-lg font-semibold text-stone-900">
                        {certificate.name}
                      </h4>
                      <p className="mt-1 text-sm text-stone-600">
                        {certificate.issuer}
                      </p>
                    </div>
                    <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-stone-700">
                      {certificate.year}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            id="education"
            className="rounded-[2rem] border border-amber-100 bg-[#fff8ee] p-8 text-stone-900 shadow-[0_14px_40px_rgba(120,53,15,0.06)]"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-amber-700">
              Education
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight text-stone-950">
              Academic background
            </h3>
            <div className="mt-8 space-y-4">
              {education.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-amber-100 bg-white/80 p-5"
                >
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-stone-900">
                        {item.title}
                      </h4>
                      <p className="text-sm text-stone-600">{item.institution}</p>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-stone-700">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}
