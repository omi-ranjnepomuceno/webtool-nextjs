"use client";

import { useActionState } from "react";
import { login } from "../_lib/actions";

export default function LoginForm() {
  // we're only returning error from the login action, so named the first arg error
  const [error, action, isPending] = useActionState(login, { message: "" });

  return (
    <form
      action={action}
      className="flex flex-col border p-4 gap-4 bg-white w-64"
    >
      <label htmlFor="email">Email</label>
      <input type="email" name="email" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" />

      <button type="submit">Login</button>
      {isPending && <p>loading</p>}
      {error && <p>{error.message}</p>}
    </form>
  );
}
