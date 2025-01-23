import { cookies } from "next/headers";
import { getClient } from "@/lib/apolloClient";
import { tokenVerifyMutation } from "./mutations";
import type {
  VerifyTokenMutation,
  VerifyTokenMutationVariables,
} from "@/types/__generated__/graphql";

export async function getAuthToken() {
  const cookieStore = await cookies();
  const authToken = cookieStore.get("token");
  if (!authToken) {
    return null;
  }
  return authToken;
}

export async function verifyToken(token: string) {
  const result = await getClient().mutate<
    VerifyTokenMutation,
    VerifyTokenMutationVariables
  >({
    mutation: tokenVerifyMutation,
    variables: { token },
    errorPolicy: "all",
  });

  return result;
}
