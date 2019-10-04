<template>
    <div class="container">
        <app-header />
        <router-view />
    </div>
</template>

<script>
  import Header from './components/Shared/Header.vue'
  import Servers from './components/Server/Servers.vue'
  import Footer from './components/Shared/Footer.vue'
  import ServerDetails from './components/Server/ServerDetails.vue'

  export default {
    components: {
      'appHeader': Header,
      'appServerDetails': ServerDetails,
      Servers,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
