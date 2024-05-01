import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_auth-restrict/auth/sign-in")({
  component: SignInComponent,
});

function SignInComponent() {
  return <div>Sign in page</div>;
}
