"use client";

import { useUser } from "../_lib/hooks";

export default function ClientComponent() {
  const { user } = useUser();

  return <div>Home page {user?.email}</div>;
}
