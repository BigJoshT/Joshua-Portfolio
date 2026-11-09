"use client";

import { useMemo, useState } from "react";
import { ProjectCarousel } from "./ProjectCarousel";
import { categories, projects, type Category } from "@/data/projects";

type Filter = Category | "All";

export function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();

    return projects.filter((p) => {
      const matchesFilter = filter === "All" || p.category === filter;
      if (!matchesFilter) return false;
      if (!q) return true;

      return (
        p.title.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q) ||
        p.tags.some((t) => t.toLowerCase().includes(q)) ||
        (p.platform?.toLowerCase().includes(q) ?? false)
      );
    });
  }, [filter, query]);

  return (
    <>
      {/* ---------------- controls ---------------- */}
      <div className="flex flex-col gap-5 border-y border-line py-5 md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
          {(["All", ...categories] as Filter[]).map((c) => {
            const active = filter === c;
            return (
              <li key={c}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(c)}
                  className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "border-accent bg-accent text-white"
                      : "border-line bg-white text-body hover:border-ink/25 hover:text-ink"
                  }`}
                >
                  {c}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="relative w-full md:w-64">
          <label htmlFor="project-search" className="sr-only">
            Search projects
          </label>
          <input
            id="project-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, tags, platforms"
            className="w-full rounded-xl border border-line bg-white px-4 py-2.5 text-base text-ink placeholder:text-muted focus:border-accent focus:outline-none"
          />
        </div>
      </div>

      {/* ---------------- count ---------------- */}
      <p
        aria-live="polite"
        className="mt-6 text-sm font-semibold uppercase tracking-wider text-muted"
      >
        {filtered.length} {filtered.length === 1 ? "project" : "projects"}
      </p>

      {/* ---------------- grid ---------------- */}
      {filtered.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-line bg-white p-16 text-center">
          <p className="font-display text-lg font-bold text-ink">No projects match that.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setFilter("All");
            }}
            className="mt-3 text-sm font-semibold text-accent hover:underline"
          >
            Clear the filters
          </button>
        </div>
      ) : (
        <div className="mt-6">
          <ProjectCarousel projects={filtered} />
        </div>
      )}
    </>
  );
}
