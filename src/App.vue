<template>
  <GMapMap
    :center="center"
    :zoom="7"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GMapMarker
      :key="index"
      v-for="(m, index) in markers"
      :position="m.position"
      :clickable="true"
      :draggable="true"
      @click="center = m.position"
    />
  </GMapMap>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "./components/HelloWorld.vue";

@Options({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
  public center: any = { lat: 51.093048, lng: 6.84212 };
  public markers: any = [];

  public async mounted() {
    for (let i = 0; i < 100; i++) {
      this.markers.push({
        position: {
          lat: 51.093048 + Math.random(),
          lng: 6.84212 + Math.random(),
        },
      });
    }
  }
}
</script>

<style>
</style>
