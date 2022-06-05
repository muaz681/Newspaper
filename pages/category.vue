<template>
<div id="app">
  <Header/>
    <Category/>
  <Footer/>
</div>
</template>

<script>
import Category from "../components/Category.vue";
export default {
    name: "IndexPage",
    components: { Category }
}
</script>
