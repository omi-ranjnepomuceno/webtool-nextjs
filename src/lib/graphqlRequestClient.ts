import { GraphQLClient } from "graphql-request";

const graphqlClient = new GraphQLClient(process.env.API_URI as string, {
  fetch,
  errorPolicy: "all",
});

export default graphqlClient;
