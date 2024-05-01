import {
  createFileRoute, Outlet, redirect, useRouter,
} from "@tanstack/react-router";
import { useEffect } from "react";
import { useAuthContext } from "@/features/auth";

export const Route = createFileRoute("/_auth-restrict")({
  beforeLoad: ({ context, location }) => {
    if (context.auth?.isAuthenticated) {
      throw redirect({ to: location.href });
    }
  },
  component: AuthRestrictLayout,
});

function AuthRestrictLayout() {
  const router = useRouter();
  const { isAuthenticated } = useAuthContext();
  const navigate = Route.useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      router
        .invalidate()
        .finally(
          () => navigate({ to: "/account" }),
        );
    }
  }, [isAuthenticated, navigate, router]);

  return <Outlet />;
}
