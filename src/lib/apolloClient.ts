import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";
import { headers } from "next/headers";

export const { getClient, query, PreloadQuery } = registerApolloClient(
  async () => {
    const authorizationHeader = (await headers()).get("authorization") ?? "";

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: process.env.API_URI,
        headers: {
          Authorization: authorizationHeader,
        },
      }),
    });
  }
);
