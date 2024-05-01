import { useEffect } from "react";
import {
  createFileRoute, Outlet, redirect, useRouter,
} from "@tanstack/react-router";
import { useAuthContext } from "@/features/auth";

export const Route = createFileRoute("/_protected")({
  beforeLoad: ({ context, location }) => {
    if (!context.auth?.isAuthenticated) {
      throw redirect({
        to: "/auth/sign-in",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: ProtectedLayout,
});

function ProtectedLayout() {
  const router = useRouter();
  const { isAuthenticated } = useAuthContext();
  const navigate = Route.useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      router.invalidate().finally(
        () => navigate({ to: "/auth/sign-in" }),
      );
    }
  }, [isAuthenticated, navigate, router]);

  return <Outlet />;
}
