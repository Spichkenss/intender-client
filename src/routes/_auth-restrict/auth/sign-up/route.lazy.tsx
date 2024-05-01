import { createLazyRoute } from "@tanstack/react-router";

export const Route = createLazyRoute("/_auth-restrict/auth/sign-up")({
  component: SignUpPageComponent,
});

function SignUpPageComponent() {
  return (
    <div>Sign Up Page</div>
  );
}
