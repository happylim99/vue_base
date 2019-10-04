<template>
  <div>
    <hr>
    <div class="row">
      <servers />
      <app-server-details />
    </div>
    <hr>
    <!-- <router-view /> -->
    <app-footer />
  </div>
</template>

<script>
  import Servers from '../components/Server/Servers.vue'
  import Footer from '../components/Shared/Footer.vue'
  import ServerDetails from '../components/Server/ServerDetails.vue'

  export default {
    components: {
      'appServerDetails': ServerDetails,
      Servers,
      'app-footer': Footer
    }
  }
</script>

<style>

</style>
