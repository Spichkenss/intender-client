import { Button } from "@/shared/ui/button";
import { useAuthContext } from "../model";

export const SignOutButton = () => {
  const { setCurrentUser } = useAuthContext();

  return (
    <Button.Root onClick={() => setCurrentUser(null)}>
      <Button.Loader>Loading...</Button.Loader>
      <Button.Label>Logout</Button.Label>
    </Button.Root>
  );
};
