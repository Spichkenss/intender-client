import { PropsWithChildren } from "react";
import { useAuthContext } from "../model";

interface SIgnedOutProps extends PropsWithChildren {}

export const SignedOut = ({ children }: SIgnedOutProps) => {
  const { isAuthenticated } = useAuthContext();
  if (isAuthenticated) return null;
  return children;
};
