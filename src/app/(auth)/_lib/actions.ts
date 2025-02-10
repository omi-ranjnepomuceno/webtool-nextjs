"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { tokenAuthMutation } from "./mutations";

export async function login(_: { message: string }, formData: FormData) {
  // type of first arg (prevState) should be the same with this action's return type
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const data = await tokenAuthMutation(email, password);

  if (data?.tokenCreate?.errors.length) {
    return { message: data.tokenCreate.errors[0].message || "" };
  }

  const { token } = data?.tokenCreate || {};
  if (token) {
    (await cookies()).set("token", token, { httpOnly: true });
    redirect("/");
  }
  return { message: "" };
}

export async function logout() {
  (await cookies()).delete("token");
  redirect("/");
}
