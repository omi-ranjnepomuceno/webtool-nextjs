import { gql } from "@apollo/client";
import { fragmentUser, pageInfoFragment } from "./fragments";
import { query } from "@/lib/apolloClient";
import type {
  UserDetailsQuery,
  UserDetailsQueryVariables,
} from "@/types/__generated__/graphql";

const userDetailsDocument = gql`
  ${fragmentUser}
  ${pageInfoFragment}
  query UserDetails($id: ID!, $after: String, $before: String, $last: Int) {
    user(id: $id) {
      ...User
      malls(after: $after, before: $before, first: 100, last: $last) {
        edges {
          node {
            id
            name
          }
        }
        totalCount
        pageInfo {
          ...PageInfoFragment
        }
      }
    }
  }
`;

export async function userDetailsQuery(userId: string) {
  const data = await query<UserDetailsQuery, UserDetailsQueryVariables>({
    query: userDetailsDocument,
    variables: { id: userId },
    errorPolicy: "all",
  });

  return data;

  // if (result?.data?.user) {
  //   return result;
  // } else {
  //   throw new Error("User not found!");
  // }
}
