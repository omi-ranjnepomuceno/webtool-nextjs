import { getClient } from "@/lib/apolloClient";
import { pageInfoFragment } from "./fragments";
import { fragmentUser } from "./fragments";
import { gql } from "@apollo/client";
import type {
  TokenAuthMutation,
  TokenAuthMutationVariables,
  VerifyTokenMutation,
  VerifyTokenMutationVariables,
} from "@/types/__generated__/graphql";

const tokenAuthDocument = gql`
  ${fragmentUser}
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
  const { data } = await getClient().mutate<
    TokenAuthMutation,
    TokenAuthMutationVariables
  >({
    mutation: tokenAuthDocument,
    variables: { email, password },
  });

  return data;
}

const tokenVerifyDocument = gql`
  ${fragmentUser}
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
