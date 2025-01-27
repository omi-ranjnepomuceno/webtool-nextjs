import { cookies } from "next/headers";
import { tokenVerifyMutation } from "./mutations";
import { AuthTokenPayload } from "@/types/authTokenPayload";

export async function getAuthToken() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("token");
  if (!authToken) {
    return null;
  }
  return authToken.value;
}

export async function getUserIdFromToken() {
  const authToken = await getAuthToken();
  if (authToken) {
    const payload: AuthTokenPayload = JSON.parse(atob(authToken.split(".")[1]));
    return payload.user_id;
  }
}

export async function verifyToken(token: string) {
  const result = await tokenVerifyMutation(token);
  return result;
}
