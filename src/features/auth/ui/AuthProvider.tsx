import { PropsWithChildren, useMemo, useState } from "react";
import { AuthContext, IAuthContext } from "../model";
import { UserState } from "@/entities/user";

interface AuthPropviderProps extends PropsWithChildren {}

export function AuthProvider({ children }: AuthPropviderProps) {
  const [user, setUser] = useState<UserState>(null);
  const isAuthenticated = !!user;

  const setCurrentUser = (user: UserState) => {
    setUser(user);
  };

  const memoziedContextValue: IAuthContext = useMemo(
    () => ({ user, setCurrentUser, isAuthenticated }),
    [isAuthenticated, user],
  );

  return (
    <AuthContext.Provider value={memoziedContextValue}>
      {children}
    </AuthContext.Provider>
  );
}
