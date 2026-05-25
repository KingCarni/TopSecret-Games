import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";

import { getProjectBySlug } from "@/lib/topsecret/site-data";
import { PageShell, SectionLabel } from "@/components/topsecret/shared/PageShell";
import CursorGlow from "@/components/topsecret/shared/CursorGlow";
import ProjectMediaPanel from "@/components/topsecret/projects/ProjectMediaPanel";
import ProjectDetailSection from "@/components/topsecret/projects/ProjectDetailSection";

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const { slug } = await Promise.resolve(params as Params);
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project — Top Secret Games" };
  return {
    title: `${project.name} — Top Secret Games`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<Params> | Params;
}) {
  const { slug } = await Promise.resolve(params as Params);
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const primaryLink = project.links?.[0];
  const secondaryLinks = project.links?.slice(1) ?? [];
  const externalLink = project.links?.find((l) =>
    /^https?:\/\//i.test(l.href ?? "")
  );

  const snapshot = [
    { k: "Status", v: project.status, accent: "#66f0d0" },
    { k: "Category", v: project.category, accent: "#7fb4ff" },
    { k: "Current focus", v: project.currentFocus, accent: "#ffd65a" },
    {
      k: "Project surface",
      v: primaryLink?.label ?? "Internal build",
      accent: "#b58bff",
    },
  ].filter((s) => Boolean(s.v));

  return (
    <PageShell>
      {/* HERO DOSSIER */}
      <section className="mx-auto max-w-7xl px-6 pt-24 pb-16 md:px-10 md:pt-32 md:pb-20">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.26em] text-white/55 transition hover:text-white"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          All projects
        </Link>

        <div className="mt-10">
          <SectionLabel number="00 / DOSSIER">{project.category}</SectionLabel>
        </div>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-start">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-[#66f0d0]/30 bg-[#66f0d0]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#66f0d0]">
                ● {project.status}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white/70">
                {project.category}
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[88px]">
              {project.name}
              {project.tagline && (
                <>
                  <br />
                  <span className="text-white/40">{project.tagline}.</span>
                </>
              )}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-white/75 md:text-xl">
              {project.summary}
            </p>

            {project.links && project.links.length > 0 && (
              <div className="mt-10 flex flex-wrap gap-3">
                {primaryLink && (
                  <a
                    href={primaryLink.href}
                    target={/^https?:\/\//i.test(primaryLink.href) ? "_blank" : undefined}
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(102,240,208,0.35)]"
                  >
                    {primaryLink.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                )}
                {secondaryLinks.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target={/^https?:\/\//i.test(l.href) ? "_blank" : undefined}
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-[#66f0d0]/40 hover:bg-white/[0.06]"
                  >
                    {l.label}
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <ProjectMediaPanel
            imageSrc={project.media?.imageSrc}
            imageAlt={project.media?.imageAlt}
            status={project.status}
            category={project.category}
            projectName={project.name}
          />
        </div>
      </section>

      {/* OPERATING SNAPSHOT */}
      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-24">
        <SectionLabel number="01 / OPERATING SNAPSHOT">System state</SectionLabel>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[28px] border border-white/10 bg-white/5 md:grid-cols-2 xl:grid-cols-4">
          {snapshot.map((s, i) => (
            <CursorGlow
              key={s.k}
              className="bg-[#06090d] p-6 md:p-8"
              color={`${s.accent}33`}
              accent="rgba(255,255,255,0.03)"
              size={300}
            >
              <span
                className="font-mono text-[11px] tracking-[0.3em]"
                style={{ color: s.accent }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.26em] text-white/55">
                {s.k}
              </p>
              <p className="mt-3 text-base leading-7 text-white/85">{s.v}</p>
            </CursorGlow>
          ))}
        </div>
      </section>

      {/* CURRENT FOCUS / LAB NOTE */}
      {(project.currentFocus || project.whyItMatters) && (
        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
          <SectionLabel number="02 / LAB NOTE">Active build brief</SectionLabel>
          <CursorGlow
            className="mt-8 rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,18,18,0.9)_0%,rgba(6,10,18,0.9)_100%)] p-10 md:p-16"
            color="rgba(102,240,208,0.16)"
            accent="rgba(127,180,255,0.10)"
            size={520}
          >
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-[0.14]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                backgroundSize: "44px 44px",
              }}
            />
            <div className="relative grid gap-12 md:grid-cols-2">
              {project.currentFocus && (
                <div>
                  <span className="font-mono text-[11px] tracking-[0.3em] text-[#66f0d0]">
                    FOCUS / NOW
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    Current focus
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-white/80">
                    {project.currentFocus}
                  </p>
                </div>
              )}
              {project.whyItMatters && (
                <div>
                  <span className="font-mono text-[11px] tracking-[0.3em] text-[#b58bff]">
                    SIGNAL / WHY
                  </span>
                  <h3 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
                    Why it matters
                  </h3>
                  <p className="mt-5 text-lg leading-8 text-white/80">
                    {project.whyItMatters}
                  </p>
                </div>
              )}
            </div>
          </CursorGlow>
        </section>
      )}

      {/* CASE STUDY NARRATIVE */}
      {project.detailSections && project.detailSections.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
          <SectionLabel number="03 / CASE STUDY">Build narrative</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            How it actually
            <span className="text-white/45"> ships.</span>
          </h2>

          <div className="mt-12 space-y-6 md:space-y-8">
            {project.detailSections.map((section, i) => (
              <ProjectDetailSection
                key={`${section.title}-${i}`}
                index={i}
                section={section}
              />
            ))}
          </div>
        </section>
      )}

      {/* TECH / SYSTEMS GRID */}
      {project.tech && project.tech.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10 md:pb-32">
          <SectionLabel number="04 / STACK">Systems & surface</SectionLabel>
          <h2 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
            What it&apos;s built with.
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {project.tech.map((t, i) => {
              const accents = ["#66f0d0", "#7fb4ff", "#ffd65a", "#b58bff"];
              const accent = accents[i % accents.length];
              return (
                <CursorGlow
                  key={t}
                  className="rounded-2xl border border-white/10 bg-[#06090d] p-5 transition-colors hover:border-white/25"
                  color={`${accent}2e`}
                  accent="rgba(255,255,255,0.04)"
                  size={240}
                >
                  <span
                    className="font-mono text-[10px] tracking-[0.28em]"
                    style={{ color: accent }}
                  >
                    SYS / {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-3 text-base font-semibold tracking-tight text-white/90">
                    {t}
                  </p>
                </CursorGlow>
              );
            })}
          </div>
        </section>
      )}

      {/* FINAL CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10 md:pb-36">
        <CursorGlow
          className="rounded-[32px] border border-white/10 bg-[linear-gradient(135deg,rgba(8,18,18,0.9)_0%,rgba(6,10,18,0.9)_100%)] p-10 md:p-16"
          color="rgba(102,240,208,0.18)"
          accent="rgba(181,139,255,0.12)"
          size={560}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          <div className="relative">
            <SectionLabel number="05 / NEXT">Keep exploring</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              {project.name} is one node.
              <br />
              <span className="text-white/45">The lab keeps shipping.</span>
            </h2>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to all projects
              </Link>
              <Link
                href="/now-building"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
              >
                Now building
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              {externalLink && (
                <a
                  href={externalLink.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-[#66f0d0]/40 bg-[#66f0d0]/10 px-6 py-3 text-sm font-semibold text-[#66f0d0] transition hover:bg-[#66f0d0]/20"
                >
                  {externalLink.label}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </CursorGlow>
      </section>
    </PageShell>
  );
}
