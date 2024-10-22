import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client/core";
import { provideApolloClient } from "@vue/apollo-composable";

export default defineNuxtPlugin((nuxtApp) => {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    uri: "https://graphql-pokemon2.vercel.app",
  });

  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });

  provideApolloClient(apolloClient);

  return {
    provide: {
      apollo: apolloClient,
    },
  };
});
