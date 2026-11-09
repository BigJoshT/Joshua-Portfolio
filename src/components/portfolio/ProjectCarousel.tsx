"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
} from "react";
import type { Project } from "@/data/projects";

const cardClassName =
  "project-carousel-card flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left shadow-[0_24px_70px_-34px_rgba(8,8,8,0.45)]";

export function ProjectCarousel({ projects }: { projects: Project[] }) {
  const [activeSlug, setActiveSlug] = useState(projects[0]?.slug ?? "");
  const dragStart = useRef<{ x: number; y: number } | null>(null);
  const ignoreClick = useRef(false);
  const activeCardRef = useRef<HTMLAnchorElement>(null);
  const focusActiveAfterMove = useRef(false);
  const activeIndex = Math.max(
    0,
    projects.findIndex((project) => project.slug === activeSlug),
  );
  const activeProject = projects[activeIndex];

  useEffect(() => {
    if (!focusActiveAfterMove.current) return;
    focusActiveAfterMove.current = false;
    activeCardRef.current?.focus();
  }, [activeIndex]);

  if (!activeProject) return null;

  const moveBy = (amount: number) => {
    const nextIndex = (activeIndex + amount + projects.length) % projects.length;
    setActiveSlug(projects[nextIndex].slug);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      focusActiveAfterMove.current = true;
      moveBy(1);
    } else if (event.key === "ArrowLeft") {
      event.preventDefault();
      focusActiveAfterMove.current = true;
      moveBy(-1);
    }
  };

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragStart.current = { x: event.clientX, y: event.clientY };
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = dragStart.current;
    dragStart.current = null;
    if (!start) return;

    const deltaX = event.clientX - start.x;
    const deltaY = event.clientY - start.y;
    if (Math.abs(deltaX) < 48 || Math.abs(deltaX) < Math.abs(deltaY) * 1.2) {
      return;
    }

    ignoreClick.current = true;
    moveBy(deltaX < 0 ? 1 : -1);
    window.setTimeout(() => {
      ignoreClick.current = false;
    }, 0);
  };

  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    if (!ignoreClick.current) return;
    event.preventDefault();
    event.stopPropagation();
    ignoreClick.current = false;
  };

  return (
    <div
      className="project-carousel"
      role="region"
      aria-label="Portfolio projects"
      aria-roledescription="carousel"
    >
      <div
        className="project-carousel-stage relative mx-[-1rem] h-[28rem] overflow-hidden sm:mx-0 sm:h-[37rem] lg:h-[39rem]"
        onKeyDown={handleKeyDown}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => {
          dragStart.current = null;
        }}
      >
        {projects.map((project, index) => {
          let offset = (index - activeIndex + projects.length) % projects.length;
          if (offset > projects.length / 2) offset -= projects.length;
          const distance = Math.abs(offset);
          const visible = distance <= 2;
          const opacity = distance <= 1 ? 1 : 0.78;
          const spread = 54;
          const scale = distance === 0 ? 1 : 0.82;
          const transform = `translate3d(calc(-50% + ${offset * spread}%), -50%, 0) rotateY(${offset * -8}deg) scale(${scale})`;
          const [from, to] = project.cover;
          const isActive = index === activeIndex;
          const sizeClassName =
            "h-[26rem] sm:h-[34rem] lg:h-[36rem] w-[min(78vw,35.625rem)]";

          const contents = (
            <>
              <div className="project-carousel-preview relative aspect-[16/10] overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.title} project preview`}
                    fill
                    draggable={false}
                    sizes="(max-width: 640px) 86vw, (max-width: 1024px) 72vw, 570px"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="project-carousel-art absolute inset-0 flex flex-col justify-between p-5 sm:p-7"
                    style={{
                      background: `radial-gradient(ellipse at 82% 18%, rgba(50,205,50,0.24), transparent 38%), linear-gradient(135deg, ${from}, ${to})`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full border border-white/25 bg-black/20 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/85 backdrop-blur-sm">
                        {project.category}
                      </span>
                      <span className="text-xs font-medium text-white/65">
                        {project.year}
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                        Project preview
                      </p>
                      <p className="mt-2 max-w-[15ch] font-display text-2xl font-bold leading-tight text-white sm:text-4xl">
                        {project.platform ?? project.category}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="flex min-h-44 grow flex-col p-5 sm:min-h-48 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {project.category}
                      {project.platform ? ` · ${project.platform}` : ""}
                    </p>
                    <h3 className="mt-2 break-words font-display text-lg font-bold leading-snug text-ink sm:text-xl">
                      {project.title}
                    </h3>
                  </div>
                  <span
                    aria-hidden="true"
                    className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-lg text-ink transition-colors group-hover:border-accent group-hover:bg-accent group-hover:text-white"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-body sm:text-base">
                  {project.summary}
                </p>
                <span className="mt-auto pt-4 text-xs font-semibold uppercase tracking-wider text-muted">
                  {isActive ? "Open project details" : "Select project"}
                </span>
              </div>
            </>
          );

          return (
            <div
              key={project.slug}
              className={`project-carousel-position absolute left-1/2 top-1/2 ${sizeClassName}`}
              style={{
                zIndex: 10 - distance,
                opacity: visible ? opacity : 0,
                pointerEvents: visible ? "auto" : "none",
                transform,
                transformStyle: "preserve-3d",
                transition:
                  "transform 700ms cubic-bezier(0.22, 1, 0.36, 1), opacity 500ms ease, width 700ms cubic-bezier(0.22, 1, 0.36, 1), height 700ms cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              aria-hidden={!visible}
              inert={!visible}
            >
              {isActive ? (
                <Link
                  href={`/portfolio/${project.slug}`}
                  ref={activeCardRef}
                  onClick={handleCardClick}
                  className={`${cardClassName} group`}
                  aria-label={`View project details: ${project.title}`}
                  tabIndex={visible ? 0 : -1}
                >
                  {contents}
                </Link>
              ) : (
                <button
                  type="button"
                  onClick={(event) => {
                    if (ignoreClick.current) {
                      handleCardClick(event);
                      return;
                    }
                    setActiveSlug(project.slug);
                  }}
                  className={`${cardClassName} group w-full cursor-pointer`}
                  aria-label={`Center project: ${project.title}`}
                  tabIndex={visible ? 0 : -1}
                >
                  {contents}
                </button>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={() => moveBy(-1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-xl text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-offset-4"
          aria-label="Previous project"
        >
          ←
        </button>
        <div className="flex items-center gap-2" aria-label="Project position">
          {projects.map((project, index) => (
            <button
              key={project.slug}
              type="button"
              onClick={() => setActiveSlug(project.slug)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-accent"
                  : "w-2.5 bg-ink/20 hover:bg-ink/40"
              }`}
              aria-label={`Show project ${index + 1}: ${project.title}`}
              aria-current={index === activeIndex ? "true" : undefined}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => moveBy(1)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-xl text-ink transition-colors hover:border-accent hover:bg-accent hover:text-white focus-visible:outline-offset-4"
          aria-label="Next project"
        >
          →
        </button>
      </div>
      <p className="sr-only" aria-live="polite" aria-atomic="true">
        Project {activeIndex + 1} of {projects.length}: {activeProject.title}
      </p>
    </div>
  );
}
