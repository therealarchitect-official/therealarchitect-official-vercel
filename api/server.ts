// ============================================================
// THE REAL ARCHITECT — API SERVER
// File: api/server.ts
// Standard RedwoodJS GraphQL server entry point.
// ============================================================

import { createServer } from '@redwoodjs/graphql-server'

import { logger } from 'src/lib/logger'
import { auth } from 'src/lib/auth'

const server = createServer({
  logger,
  auth,
})

server.start().then(() => {
  console.log('GraphQL server started')
})
