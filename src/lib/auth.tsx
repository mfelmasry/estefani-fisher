import { createContext, useContext, useMemo, useState, type ReactNode } from "react";
import { getUser, setUser, type User } from "./storage";

type AuthCtx = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

const Ctx = createContext<AuthCtx | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUserState] = useState<User | null>(() => getUser());
  const value = useMemo(
    () => ({
      user,
      login: (next: User) => {
        setUser(next);
        setUserState(next);
      },
      logout: () => {
        setUser(null);
        setUserState(null);
      },
    }),
    [user],
  );
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useAuth() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
