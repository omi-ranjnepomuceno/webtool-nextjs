import { userFragment } from "@/fragments/user";
import { pageInfoFragment } from "@/fragments/pageInfo";
import { getAuthToken } from "./utils";

import { User } from "@/types/User";

import { gql } from "graphql-request";
import graphqlClient from "@/lib/graphqlRequestClient";

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
  const data = await graphqlClient
    .setHeader("Authorization", `JWT ${await getAuthToken()}`)
    .request<User>({ document: userDetailsDocument });
  return data;
}
