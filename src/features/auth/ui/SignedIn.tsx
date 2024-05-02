import { PropsWithChildren } from "react";
import { useAuthContext } from "../model";

interface SIgnedInProps extends PropsWithChildren {}

export const SignedIn = ({ children }: SIgnedInProps) => {
  const { isAuthenticated } = useAuthContext();
  if (!isAuthenticated) return null;
  return children;
};
