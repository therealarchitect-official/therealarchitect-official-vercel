// ============================================================
// THE REAL ARCHITECT — PORTFOLIO ROUTE DEFINITIONS
// File: web/src/Routes.tsx
// Registered pages: Home, About, Projects, Contact
// ============================================================

import { Set, Router, Route } from '@redwoodjs/router'

import SiteLayout from 'src/layouts/SiteLayout/SiteLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={SiteLayout}>
        <Route path="/" page={HomePage} name="home" />
        <Route path="/about" page={AboutPage} name="about" />
        <Route path="/projects" page={ProjectsPage} name="projects" />
        <Route path="/contact" page={ContactPage} name="contact" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes