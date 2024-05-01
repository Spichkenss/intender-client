import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_protected/account")({
  component: AccountComponent,
});

function AccountComponent() {
  return <div>account</div>;
}
