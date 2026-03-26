import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  getProjectGithubUrl,
  getProjectImplementation,
  projects,
} from "../../data/portfolio";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage(
  props: PageProps<"/projects/[slug]">
) {
  const { slug } = await props.params;
  const project = getProjectBySlug(slug);
  const githubUrl = project ? getProjectGithubUrl(project) : "";
  const implementation = project ? getProjectImplementation(project) : [];

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_30%),linear-gradient(180deg,_#fffefb_0%,_#fff9f1_42%,_#fdf5ea_100%)] px-6 py-8 text-stone-900 sm:px-10 lg:px-12">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/#projects"
          className="inline-flex rounded-full border border-stone-300/80 bg-white/90 px-4 py-2 text-sm font-medium text-stone-700 shadow-sm transition hover:border-stone-900 hover:bg-stone-900 hover:text-white"
        >
          Back to Projects
        </Link>

        <div className="mt-8 overflow-hidden rounded-[2.25rem] border border-white/90 bg-white/90 shadow-[0_26px_80px_rgba(120,53,15,0.10)]">
          <div className="relative border-b border-amber-100/80 bg-[radial-gradient(circle_at_top_right,_rgba(251,191,36,0.22),_transparent_28%),linear-gradient(180deg,_rgba(255,255,255,0.92)_0%,_rgba(255,248,238,0.96)_100%)] px-8 py-10 sm:px-10 sm:py-12">
            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-amber-700">
                  {project.type}
                </p>
                <h1 className="mt-4 text-4xl font-semibold tracking-[-0.04em] text-stone-950 sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-6 max-w-3xl text-base leading-8 text-stone-600 sm:text-lg">
                  {project.description}
                </p>
              </div>

              <div className="w-full max-w-sm rounded-[1.75rem] border border-amber-100 bg-white/80 p-6 shadow-[0_18px_40px_rgba(120,53,15,0.06)] backdrop-blur">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                  Stack
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-stone-200 bg-white px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6 px-8 py-8 sm:px-10 sm:py-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[1.75rem] border border-amber-100 bg-[linear-gradient(180deg,_#fffdf9_0%,_#fff6e8_100%)] p-7 shadow-[0_16px_40px_rgba(120,53,15,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Outcome
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
                What this project delivered
              </h2>
              <p className="mt-5 text-base leading-8 text-stone-700">
                {project.outcome}
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-stone-200 bg-white p-7 shadow-[0_16px_40px_rgba(120,53,15,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                Highlights
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
                Key points
              </h2>
              <ul className="mt-5 space-y-3 text-sm leading-7 text-stone-700">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="rounded-[1.25rem] border border-stone-100 bg-stone-50 px-4 py-4"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {implementation.length > 0 ? (
            <div className="border-t border-amber-100/80 bg-[#fffdfa] px-8 py-8 sm:px-10 sm:py-10">
              <div className="max-w-4xl">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-700">
                  Implementation
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-stone-950">
                  How it was built
                </h2>
              </div>
              <ul className="mt-6 grid gap-4 md:grid-cols-2">
                {implementation.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.5rem] border border-stone-200 bg-white px-5 py-5 text-sm leading-7 text-stone-700 shadow-[0_12px_30px_rgba(120,53,15,0.04)]"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.liveUrl || githubUrl ? (
            <div className="border-t border-stone-200/80 bg-white px-8 py-8 sm:px-10">
              <div className="flex flex-wrap gap-3">
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-stone-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"
                  >
                    Visit Live Project
                  </a>
                ) : null}
                {githubUrl ? (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full border border-stone-300 bg-white px-6 py-3 text-sm font-semibold text-stone-900 transition hover:border-stone-950 hover:bg-stone-950 hover:text-white"
                  >
                    View GitHub Repo
                  </a>
                ) : null}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </main>
  );
}
