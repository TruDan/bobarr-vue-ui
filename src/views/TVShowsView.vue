<template>
  <v-container>
    <v-row class="media-item-list">
      <v-col v-for="tvshow of tvShows" :key="tvshow.id">
        <MediaItemCard :item="tvshow"></MediaItemCard>
      </v-col>
      <v-spacer />
    </v-row>
  </v-container>
</template>

<script>
import gql from "graphql-tag";
import MediaItemCard from "@/components/MediaItemCard";

export default {
  name: "TVShowsView",
  components: {MediaItemCard},
  apollo: {
    tvShows: {
      query: gql`query getLibraryTVShows {
  tvShows: getTVShows {
    id
    tmdbId
    title
    originalTitle
    posterPath
    runtime
    overview
    voteAverage
    releaseDate
    createdAt
    updatedAt
    __typename
  }
}`
    }
  }
}
</script>

<style scoped>
.media-item-list {
  align-items: stretch;
  justify-content: stretch;
  align-content: space-between;
}
.media-item-list > .col {
  flex: 0;
}
</style>