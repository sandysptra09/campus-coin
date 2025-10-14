"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { HeroUIProvider } from "@heroui/react";
import { ToastProvider } from "@heroui/react";

type SessionContextType = {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
};

const SessionContext = createContext<SessionContextType | undefined>(undefined);

function SessionProvider({ children }: { children: ReactNode }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("isLoggedIn");
    if (stored) setIsLoggedIn(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  return (
    <SessionContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);
  if (!context)
    throw new Error("useSession must be used inside SessionProvider");
  return context;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <HeroUIProvider>
      <ToastProvider />
      <SessionProvider>{children}</SessionProvider>
    </HeroUIProvider>
  );
}
