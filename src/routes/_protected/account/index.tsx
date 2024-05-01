import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_protected/account/")({
  component: AccountComponent,
});

function AccountComponent() {
  return <div>account</div>;
}
