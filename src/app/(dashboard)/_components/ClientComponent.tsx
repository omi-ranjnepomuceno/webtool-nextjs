"use client";

import Button from "@/components/Button";
import { useUser } from "../_lib/hooks";
import { logout } from "@/app/(auth)/_lib/actions";

export default function ClientComponent() {
  const { user } = useUser();

  return (
    <div>
      <p>
        NAME: {user?.firstName} {user?.lastName}
      </p>
      <p>EMAIL: {user?.email}</p>
      <Button onClick={async () => await logout()}>LOGOUT</Button>
    </div>
  );
}
