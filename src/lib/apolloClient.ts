import { getAuthToken } from "@/app/(auth)/_lib/utils";
import { HttpLink } from "@apollo/client";
import {
  registerApolloClient,
  ApolloClient,
  InMemoryCache,
} from "@apollo/experimental-nextjs-app-support";

export const { getClient, query, PreloadQuery } = registerApolloClient(
  async () => {
    const authToken = await getAuthToken();

    return new ApolloClient({
      cache: new InMemoryCache(),
      link: new HttpLink({
        uri: process.env.API_URI,
        headers: {
          Authorization: authToken ? `JWT ${authToken}` : "",
        },
      }),
    });
  }
);
