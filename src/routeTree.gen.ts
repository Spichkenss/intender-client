/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as ProtectedImport } from './routes/_protected'
import { Route as IndexImport } from './routes/index'
import { Route as AuthSignInImport } from './routes/auth/sign-in'
import { Route as ProtectedAccountIndexImport } from './routes/_protected/account/index'

// Create/Update Routes

const ProtectedRoute = ProtectedImport.update({
  id: '/_protected',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const AuthSignInRoute = AuthSignInImport.update({
  path: '/auth/sign-in',
  getParentRoute: () => rootRoute,
} as any)

const ProtectedAccountIndexRoute = ProtectedAccountIndexImport.update({
  path: '/account/',
  getParentRoute: () => ProtectedRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/_protected': {
      preLoaderRoute: typeof ProtectedImport
      parentRoute: typeof rootRoute
    }
    '/auth/sign-in': {
      preLoaderRoute: typeof AuthSignInImport
      parentRoute: typeof rootRoute
    }
    '/_protected/account/': {
      preLoaderRoute: typeof ProtectedAccountIndexImport
      parentRoute: typeof ProtectedImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ProtectedRoute.addChildren([ProtectedAccountIndexRoute]),
  AuthSignInRoute,
])

/* prettier-ignore-end */
