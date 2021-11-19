<template>
  <div>
    <Header/>
    <div class="content">

    <Nuxt/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default { components: { Header } }
</script>
<style lang="scss">
  .content{
    padding-top: 61px;
    min-height: 500px;
  }
</style>
