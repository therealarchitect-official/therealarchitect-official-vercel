import { useState } from 'react'
import { Link, routes } from '@redwoodjs/router'

// ============================================================
// THE REAL ARCHITECT — PROJECTS PAGE
// File: web/src/pages/ProjectsPage.tsx
// Project grid with flip-to-reveal stat cards.
// Later: swap PROJECTS for RedwoodJS cells (GraphQL query).
// ============================================================

// ---------- Project data (static for now) ----------
const PROJECTS = [
  {
    id: 1,
    name: 'PORTFOLIO v1',
    tech: 'RedwoodJS',
    desc: 'This site. Built with RedwoodJS, React and Prisma, one file at a time.',
    progress: 85,
  },
  {
    id: 2,
    name: 'PIXEL TOOLKIT',
    tech: 'CSS / JS',
    desc: 'A collection of 8-bit UI utilities: scanlines, chunky buttons, stepped animations.',
    progress: 70,
  },
  {
    id: 3,
    name: 'NEXT PROJECT',
    tech: 'TBD',
    desc: 'Slot reserved. Something new is always in the build queue.',
    progress: 10,
  },
]

// ---------- Card component ----------
function ProjectCard({ project }: { project: (typeof PROJECTS)[number] }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <div
      className="tra-box tra-card"
      style={{ cursor: 'pointer' }}
      onClick={() => setFlipped((f) => !f)}
    >
      <div style={{ color: '#ff6b6b', fontSize: '9px', marginBottom: '10px' }}>
        [{project.tech}]
      </div>
      <div className="tra-title" style={{ fontSize: '11px', marginBottom: '14px' }}>
        {project.name}
      </div>

      {flipped ? (
        <div>
          <div style={{ fontSize: '8px', marginBottom: '6px' }}>PROGRESS:</div>
          <div className="tra-bar">
            <div className="tra-bar-fill" style={{ width: `${project.progress}%` }} />
          </div>
          <div style={{ fontSize: '8px', marginTop: '8px', color: '#ff6b6b' }}>
            {project.progress}% {project.progress >= 85 ? '★' : ''}
          </div>
        </div>
      ) : (
        <p style={{ fontSize: '8px', lineHeight: '2', color: '#d98080', margin: 0 }}>
          {project.desc}
        </p>
      )}

      <div style={{ fontSize: '7px', marginTop: '14px', color: '#7a0f0f' }}>
        &gt; CLICK TO {flipped ? 'HIDE' : 'VIEW'} PROGRESS
      </div>
    </div>
  )
}

// ---------- Page ----------
const ProjectsPage = () => {
  return (
    <div>
      <div className="tra-box" style={{ marginBottom: '24px' }}>
        <h1 className="tra-title" style={{ fontSize: '13px', margin: 0 }}>
          PROJECTS
        </h1>
        <p style={{ fontSize: '9px', lineHeight: '2', color: '#d98080', marginTop: '12px' }}>
          Things I have built and things I am building. Click a card to see its
          progress bar.
          <span className="tra-blink">_</span>
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '24px',
        }}
      >
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <div className="tra-box">
        <p style={{ fontSize: '9px', lineHeight: '2', color: '#d98080', margin: 0 }}>
          &gt; Want the full story? Head back to the home page.
        </p>
        <Link
          to={routes.home()}
          className="tra-btn tra-btn--ghost"
          style={{ display: 'inline-block', marginTop: '16px', textDecoration: 'none' }}
        >
          ◀ BACK TO HOME
        </Link>
      </div>
    </div>
  )
}

export default ProjectsPage
