import { useEffect, useState } from 'react'
import { Link, routes } from '@redwoodjs/router'

// ============================================================
// THE REAL ARCHITECT — HOME PAGE
// File: web/src/pages/HomePage.tsx
// Typewriter hero, intro, skill bars, call to action.
// ============================================================

// ---------- Typewriter hook ----------
function useTypewriter(text: string, speed = 40) {
  const [out, setOut] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    const t = setInterval(() => {
      i++
      setOut(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(t)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(t)
  }, [text, speed])

  return { out, done }
}

// ---------- Skill bar component ----------
const SKILLS = [
  { name: 'REDWOODJS', lvl: 92 },
  { name: 'REACT', lvl: 90 },
  { name: 'TYPESCRIPT', lvl: 88 },
  { name: 'PRISMA', lvl: 84 },
]

function SkillBar({ name, lvl, delay }: { name: string; lvl: number; delay: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setWidth(lvl), delay)
    return () => clearTimeout(t)
  }, [lvl, delay])

  return (
    <div style={{ marginBottom: '14px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '9px',
          marginBottom: '4px',
        }}
      >
        <span>{name}</span>
        <span style={{ color: '#ff6b6b' }}>{lvl}/100</span>
      </div>
      <div className="tra-bar">
        <div className="tra-bar-fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  )
}

// ---------- Page ----------
const HomePage = () => {
  const hero = useTypewriter("HI, I'M THE REAL ARCHITECT")

  return (
    <div>
      {/* ============ HERO ============ */}
      <div className="tra-box" style={{ marginBottom: '24px' }}>
        <h1
          className="tra-title"
          style={{ fontSize: '14px', lineHeight: '2', minHeight: '84px', margin: 0 }}
        >
          {hero.out}
          <span className="tra-blink">_</span>
        </h1>
        <p style={{ fontSize: '9px', lineHeight: '2.2', color: '#d98080', marginTop: '16px' }}>
          Full-stack developer building with RedwoodJS, React and Prisma.
          <br />
          This site is my playground: red, black and fully pixelated.
        </p>
        <Link
          to={routes.projects()}
          className="tra-btn"
          style={{ display: 'inline-block', marginTop: '20px', textDecoration: 'none' }}
        >
          ▶ VIEW MY PROJECTS
        </Link>
      </div>

      {/* ============ SKILLS ============ */}
      <div className="tra-box" style={{ marginBottom: '24px' }}>
        <h2 className="tra-title" style={{ fontSize: '11px', marginBottom: '20px' }}>
          SKILLS
        </h2>
        {SKILLS.map((s, i) => (
          <SkillBar key={s.name} name={s.name} lvl={s.lvl} delay={i * 200} />
        ))}
      </div>

      {/* ============ NOW BUILDING ============ */}
      <div className="tra-box">
        <h2 className="tra-title" style={{ fontSize: '11px', marginBottom: '16px' }}>
          NOW BUILDING
        </h2>
        <p style={{ fontSize: '9px', lineHeight: '2.2', color: '#d98080' }}>
          &gt; This portfolio — RedwoodJS, one file at a time.
          <br />
          &gt; More projects landing on the Projects page soon.
          <span className="tra-blink">_</span>
        </p>
      </div>
    </div>
  )
}

export default HomePage
