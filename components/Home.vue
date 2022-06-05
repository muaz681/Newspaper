<template>
  <!-- Tag Section -->
  <div class="container mx-auto lg:px-16 px-4">
    <Marquee />
    <Tag />
    <Heading />
    <Second />
    <Advertisement />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
    <Seventh />
    <Eighth />
    <Nineth />
    <Tenth />
  </div>
</template>

<script>
import Tag from "./frontend/home/Tag.vue";
import Marquee from "./frontend/home/Marquee.vue";
import Heading from "./frontend/home/Heading.vue";
import Second from "./frontend/home/Second.vue";
import Advertisement from "./frontend/home/Advertisement.vue";
import Third from "./frontend/home/Third.vue";
import Fourth from "./frontend/home/Fourth.vue";
import Fifth from "./frontend/home/Fifth.vue";
import Sixth from "./frontend/home/Sixth.vue";
import Seventh from "./frontend/home/Seventh.vue";
import Eighth from "./frontend/home/Eighth.vue";
import Nineth from "./frontend/home/Nineth.vue";
import Tenth from "./frontend/home/Tenth.vue";

export default {
  name: "pink-tabs",
  data() {
    return {
      openTab: 1,
    };
  },
  components: {
    Tag,
    Heading,
    Second,
    Advertisement,
    Third,
    Fourth,
    Fifth,
    Sixth,
    Seventh,
    Eighth,
    Nineth,
    Tenth,
  },
  methods: {
    toggleTabs: function (tabNumber) {
      this.openTab = tabNumber;
    },
  },
};
</script>

<style></style>
