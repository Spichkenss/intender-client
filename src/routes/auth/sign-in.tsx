import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth/sign-in")({
  component: SignInComponent,
});

function SignInComponent() {
  return <div>Sign in page</div>;
}
