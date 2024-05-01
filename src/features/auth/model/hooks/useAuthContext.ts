import { useContext } from "react";
import { AuthContext } from "../AuthContext";

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuthContext hook must be used within AuthProvider!");
  return ctx;
};
