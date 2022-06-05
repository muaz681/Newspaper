<template>
<div id="app">
  <Header/>
    <Details/>
  <Footer/>
</div>
</template>

<script>
import Details from "../components/Details.vue";
export default {
    name: "IndexPage",
    components: { Details }
}
</script>