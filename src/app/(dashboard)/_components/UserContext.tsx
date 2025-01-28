"use client";

import { User } from "@/types/User";
import { createContext } from "react";

interface UserContext {
  user?: User;
}

export const UserContext = createContext<UserContext>({});

export const UserProvider = ({
  user,
  children,
}: {
  user: User;
  children: React.ReactNode;
}) => {
  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
};
