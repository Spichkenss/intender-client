import { UserState } from "@/entities/user";

export interface IAuthContext {
  user: UserState;
  setCurrentUser: (_user: UserState) => void;
  isAuthenticated: boolean;
}
