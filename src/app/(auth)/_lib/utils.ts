import { cookies } from "next/headers";
import { tokenVerifyMutation } from "./mutations";

export async function getAuthToken() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("token");
  if (!authToken) {
    return null;
  }
  return authToken;
}

export async function verifyToken(token: string) {
  const result = await tokenVerifyMutation(token);
  return result;
}
