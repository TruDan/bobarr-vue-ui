<template>
<v-card class="media-item">
  <v-img :src="item.posterPath | bobarrImagePath" width="220px" height="330px"></v-img>
  <v-card-title>{{item.title}}</v-card-title>
</v-card>
</template>

<script>
export default {
  name: "MediaItemCard",
  props: {
    item: {
      type: Object
    }
  },
  filters: {
    bobarrImagePath(path) {
      return `${process.env.VUE_APP_BOBARR_API}image-cache?i=w220_and_h330_face${path}`;
    }
  }
}
</script>

<style scoped>
.media-item
{
  width: 220px;
  min-height: 330px;
  height: 100%;
}
</style>