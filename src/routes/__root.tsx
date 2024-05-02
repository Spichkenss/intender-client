import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { IAuthContext, useAuthContext } from "@/features/auth";
import { Navbar } from "@/widgets/Navbar";

interface IRouterContext {
  auth?: IAuthContext;
}

export const Route = createRootRouteWithContext<IRouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
