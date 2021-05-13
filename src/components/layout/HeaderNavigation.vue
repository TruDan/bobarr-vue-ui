<template>
  <v-app-bar app color="primary" dark>
    <v-toolbar-title class="mr-5">Bobarr</v-toolbar-title>

    <v-btn text tile to="/movies">Movies</v-btn>
    <v-btn text tile to="/tvshows">TV Shows</v-btn>
    <v-btn text tile to="/discover">Discover</v-btn>
    <v-btn text tile to="/suggestions">Suggestions</v-btn>
    <v-btn text tile to="/calendar">Calendar</v-btn>


    <v-spacer></v-spacer>
    <v-btn text tile to="/search">Search</v-btn>
    <v-btn text tile to="/settings">Settings</v-btn>
    <v-menu
        left
        bottom offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
            icon
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>Jackett</v-list-item>
        <v-list-item>Transmission</v-list-item>
        <v-list-item>Jobs</v-list-item>
        <v-list-item>FlareSolverr</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: "HeaderNavigation"
}
</script>

<style scoped>

</style>