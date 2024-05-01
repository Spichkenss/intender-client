import { createRootRouteWithContext, Link, Outlet } from "@tanstack/react-router";
import { IAuthContext, useAuthContext } from "@/features/auth";
import { Button } from "@/shared/ui/button";

interface IRouterContext {
  auth?: IAuthContext;
}

export const Route = createRootRouteWithContext<IRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  const { setCurrentUser, isAuthenticated } = useAuthContext();

  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/account">Account</Link>
      {
        isAuthenticated
          ? <Button onClick={() => setCurrentUser(null)}>Logout</Button>
          : <Button onClick={() => setCurrentUser({ name: "Sasha" })}>Login</Button>
      }

      <h3>{String(isAuthenticated)}</h3>
      <hr />
      <Outlet />
    </>
  );
}
