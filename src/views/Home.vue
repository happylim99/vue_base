<template>
  <div>
    <!-- <app-server-status v-for='server in 5' :key='server' /> -->
    <h2>This is home page</h2>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import ServerStatus from '../components/ServerStatus.vue'

export default {
  components: {
    'app-server-status': ServerStatus
  }
}
</script>
