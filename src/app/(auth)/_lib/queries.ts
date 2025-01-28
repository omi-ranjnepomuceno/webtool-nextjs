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
  query UserDetails($after: String, $before: String, $last: Int) {
    me {
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

export async function userDetailsQuery() {
  const data = await query<UserDetailsQuery, UserDetailsQueryVariables>({
    query: userDetailsDocument,
    errorPolicy: "all",
  });

  return data;
}
