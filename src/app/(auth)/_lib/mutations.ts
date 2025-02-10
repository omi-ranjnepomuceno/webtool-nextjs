import { getClient } from "@/lib/apollo-client-rsc";
import { userFragment } from "@/fragments/user";
import { pageInfoFragment } from "@/fragments/pageInfo";
import { gql } from "@apollo/client";

import {
  VerifyTokenMutation,
  VerifyTokenMutationVariables,
} from "./types/VerifyToken";
import {
  CreateTokenMutation,
  CreateTokenMutationVariables,
} from "./types/CreateToken";

const tokenAuthDocument = gql`
  ${userFragment}
  ${pageInfoFragment}
  mutation TokenAuth(
    $email: String!
    $password: String!
    $after: String
    $before: String
    $last: Int
  ) {
    tokenCreate(email: $email, password: $password) {
      errors: accountErrors {
        code
        field
        message
        user {
          id
          email
        }
      }
      csrfToken
      token
      user {
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
  }
`;

export async function tokenAuthMutation(email: string, password: string) {
  const data = await getClient().mutate<
    CreateTokenMutation,
    CreateTokenMutationVariables
  >({
    mutation: tokenAuthDocument,
    variables: { email, password },
  });

  return data;
}

const tokenVerifyDocument = gql`
  ${userFragment}
  ${pageInfoFragment}
  mutation VerifyToken(
    $token: String!
    $after: String
    $before: String
    $last: Int
  ) {
    tokenVerify(token: $token) {
      payload
      user {
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
  }
`;

export async function tokenVerifyMutation(token: string) {
  const data = await getClient().mutate<
    VerifyTokenMutation,
    VerifyTokenMutationVariables
  >({
    mutation: tokenVerifyDocument,
    variables: { token },
    errorPolicy: "all",
  });

  return data;
}
