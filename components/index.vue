<script setup lang="ts">
import { computed, ref } from "vue";
import { useQuery } from "@vue/apollo-composable";
import gql from "graphql-tag";

const fetchdata = ref();

const query = gql`
  query GetPokemons {
    pokemons(first: 1) {
      name
      types
      image
    }
  }
`;

const { onResult, refetch, result } = useQuery(query);

const name = computed(() => result.value?.pokemons[0].name ?? "");

const onClick = () => {
  console.log("refetch called");
  refetch();
};
</script>

<template>
  <div>
    <button @click="onClick">refetch pokemons</button>
    <div>
      Pokemon name: <span>{{ name }}</span>
    </div>
  </div>
</template>
