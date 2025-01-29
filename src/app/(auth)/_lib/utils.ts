import { cookies } from "next/headers";
import { tokenVerifyMutation } from "./mutations";
import { userDetailsQuery } from "./queries";
import type { AuthTokenPayload } from "@/types/AuthTokenPayload";

export async function getAuthToken() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("token");
  if (!authToken) {
    return null;
  }
  return authToken.value;
}

export async function getPayloadFromToken() {
  const authToken = await getAuthToken();
  if (authToken) {
    const payload: AuthTokenPayload = JSON.parse(atob(authToken.split(".")[1]));
    return payload;
  }
}

export async function verifyToken(token: string) {
  const result = await tokenVerifyMutation(token);
  return result;
}

export async function getUserDetails() {
  const data = await userDetailsQuery();
  return data.data.me;
}
