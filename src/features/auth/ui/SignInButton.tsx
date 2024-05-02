import { Button } from "@/shared/ui/button";
import { useAuthContext } from "../model";

export const SignInButton = () => {
  const { setCurrentUser } = useAuthContext();

  return (
    <Button.Root onClick={() => setCurrentUser({ name: "Sasha" })}>
      <Button.Loader>Loading...</Button.Loader>
      <Button.Label>Sign in</Button.Label>
    </Button.Root>
  );
};
