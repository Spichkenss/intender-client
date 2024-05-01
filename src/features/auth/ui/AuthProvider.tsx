import { PropsWithChildren, useMemo, useState } from "react";
import { AuthContext, IAuthContext } from "../model";
import { UserState } from "@/entities/user";

const USER_STORAGE_KEY = "user";

const StoredUser = {
  get() {
    try {
      const storedUser = localStorage.getItem(USER_STORAGE_KEY);
      return (storedUser ? JSON.parse(storedUser) : null) as UserState;
    } catch (e) {
      console.log(e);
      throw e;
    }
  },
  set(userState: UserState) {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(userState));
  },
};

interface AuthPropviderProps extends PropsWithChildren {}

export function AuthProvider({ children }: AuthPropviderProps) {
  const [user, setUser] = useState<UserState>(() => StoredUser.get());
  const isAuthenticated = !!user;

  const setCurrentUser = (user: UserState) => {
    setUser(user);
    StoredUser.set(user);
  };

  const memoziedContextValue: IAuthContext = useMemo(
    () => ({ user, setCurrentUser, isAuthenticated }),
    [isAuthenticated, user],
  );

  return <AuthContext.Provider value={memoziedContextValue}>{children}</AuthContext.Provider>;
}
