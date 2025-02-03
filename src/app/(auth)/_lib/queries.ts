import { gql } from "@apollo/client";
import { userFragment } from "@/fragments/user";
import { pageInfoFragment } from "@/fragments/pageInfo";
import { query } from "@/lib/apolloClient";
import { getAuthToken } from "./utils";

import { User } from "@/types/User";

const userDetailsDocument = gql`
  ${userFragment}
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
  const data = await query<User>({
    query: userDetailsDocument,
    errorPolicy: "all",
    context: {
      headers: {
        authorization: `JWT ${await getAuthToken()}`,
      },
    },
  });

  return data;
}
