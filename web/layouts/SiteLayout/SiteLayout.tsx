import { Link, routes } from '@redwoodjs/router'

// ============================================================
// THE REAL ARCHITECT — PORTFOLIO SITE LAYOUT
// File: web/src/layouts/SiteLayout/SiteLayout.tsx
// Nav bar + footer shell that wraps every page.
// ============================================================

type SiteLayoutProps = {
  children?: React.ReactNode
}

const SiteLayout = ({ children }: SiteLayoutProps) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* ================= NAV ================= */}
      <nav
        className="tra-box"
        style={{
          margin: '16px',
          padding: '12px 16px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '12px',
        }}
      >
        <Link
          to={routes.home()}
          className="tra-float"
          style={{
            color: '#ff2b2b',
            textDecoration: 'none',
            fontSize: '12px',
            textShadow: '3px 3px 0 #7a0f0f',
          }}
        >
          THE REAL ARCHITECT
        </Link>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          <Link to={routes.home()} className="tra-btn tra-btn--ghost" style={{ textDecoration: 'none' }}>
            HOME
          </Link>
          <Link to={routes.about()} className="tra-btn tra-btn--ghost" style={{ textDecoration: 'none' }}>
            ABOUT
          </Link>
          <Link to={routes.projects()} className="tra-btn tra-btn--ghost" style={{ textDecoration: 'none' }}>
            PROJECTS
          </Link>
          <Link to={routes.contact()} className="tra-btn tra-btn--ghost" style={{ textDecoration: 'none' }}>
            CONTACT
          </Link>
        </div>
      </nav>

      {/* ================= MARQUEE ================= */}
      <div
        style={{
          overflow: 'hidden',
          borderTop: '3px solid #ff2b2b',
          borderBottom: '3px solid #ff2b2b',
          background: '#140000',
          marginBottom: '24px',
        }}
      >
        <div className="tra-marquee" style={{ color: '#ff6b6b' }}>
          ★ WELCOME TO MY PORTFOLIO ★ REDWOODJS + REACT + PRISMA ★ HAVE A LOOK
          AROUND ★ ★
        </div>
      </div>

      {/* ================= PAGE CONTENT ================= */}
      <main style={{ flex: 1, width: '100%', maxWidth: '960px', margin: '0 auto', padding: '0 16px' }}>
        {children}
      </main>

      {/* ================= FOOTER ================= */}
      <footer
        style={{
          textAlign: 'center',
          padding: '24px 16px',
          color: '#7a0f0f',
          fontSize: '8px',
        }}
      >
        © {new Date().getFullYear()} THE REAL ARCHITECT — BUILT WITH REDWOODJS
      </footer>
    </div>
  )
}

export default SiteLayout
