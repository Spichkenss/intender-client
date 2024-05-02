import {
  createRouter,
  RoutePaths,
  RouterProvider as TanstackRouteProvider,
} from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useAuthContext } from "@/features/auth";

export type RoutePath = RoutePaths<typeof routeTree>

// Create a new router instance
const router = createRouter({ routeTree, context: { auth: undefined } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  // eslint-disable-next-line no-unused-vars
  interface Register {
    router: typeof router;
  }
}

export function RouterProvider() {
  const auth = useAuthContext();
  return (
    <TanstackRouteProvider
      router={router}
      context={{ auth }}
    />
  );
}
