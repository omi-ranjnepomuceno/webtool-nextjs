"use client";

import { User } from "@/types/User";
import { createContext } from "react";

export const UserContext = createContext<User["me"] | null>(null);

export const UserProvider = ({
  user,
  children,
}: {
  user: User["me"];
  children: React.ReactNode;
}) => {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};
