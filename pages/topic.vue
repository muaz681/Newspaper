<template>
<div id="app">
  <Header/>
    <TopicDetails/>
  <Footer/>
</div>
</template>

<script>
import TopicDetails from "../components/TopicDetails.vue";
export default {
    name: "IndexPage",
    components: { TopicDetails }
}
</script>
