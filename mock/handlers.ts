import { graphql, HttpResponse } from "msw";

export const handlers = [
  graphql.query("GetPokemons", ({ query }) => {
    console.log('Intercepted a "ListPosts" GraphQL query:', query);
    return HttpResponse.json({
      data: {
        // Convert all posts to an array
        // and return as the "posts" root-level property.
        pokemons: [
          {
            name: "Mocked Pokemon",
            types: ["Grass", "Poison"],
            image: "https://img.pokemondb.net/artwork/bulbasaur.jpg",
            __typename: "Pokemon",
          },
        ],
      },
    });
  }),
];
