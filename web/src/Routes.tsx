// ============================================================
// THE REAL ARCHITECT — PORTFOLIO ROUTE DEFINITIONS
// File: web/src/Routes.tsx
// Registered pages: Home, Projects
// ============================================================

import { Set, Router, Route } from '@redwoodjs/router'

import SiteLayout from 'src/layouts/SiteLayout/SiteLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SiteLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/projects" page={ProjectsPage} name="projects" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
