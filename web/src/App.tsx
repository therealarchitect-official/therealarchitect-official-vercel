import { Suspense } from 'react'

import { useAuth } from 'src/auth'
import Routes from 'src/Routes'

import FatalErrorPage from 'src/pages/FatalErrorPage'
import { Set, Router } from '@redwoodjs/router'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

// ============================================================
// THE REAL ARCHITECT — PORTFOLIO ROUTES
// File: web/src/App.tsx
// Pages: Home, About, Projects, Contact
// ============================================================

type AppProps = {
  title?: string
  children?: React.ReactNode
}

const App = ({ title }: AppProps) => {
  const { loading, authenticated, logOut } = useAuth()

  if (loading) {
    // 8-bit loading screen: red on black with blinking cursor
    return (
      <div
        style={{
          background: '#0a0000',
          color: '#ff2b2b',
          fontFamily: '"Press Start 2P", "Courier New", monospace',
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}
      >
        <p style={{ fontSize: 14, textShadow: '3px 3px 0 #7a0f0f' }}>LOADING...</p>
        <p className="tra-blink" style={{ fontSize: 18 }}>
          _
        </p>
      </div>
    )
  }

  return (
    <RedwoodApolloProvider>
      <FatalErrorPage pageOptions={{ title: title }} />
      <Router>
        <Set wrap={Suspense} fallback="Loading...">
          <Routes />
        </Set>
      </Router>
    </RedwoodApolloProvider>
  )
}

export default App