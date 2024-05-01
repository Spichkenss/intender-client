import { createRouter, RouterProvider as TanstackRouteProvider } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { useAuthContext } from "@/features/auth";

// Create a new router instance
const router = createRouter({ routeTree, context: { auth: undefined } });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
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
