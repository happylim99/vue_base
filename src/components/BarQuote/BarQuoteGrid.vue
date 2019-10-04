<template>
    <div class="row">
        <app-bar-quote v-for="(quote, index) in quotes" :key="quote" @click.native="deleteQuote(index)">{{ quote }}</app-bar-quote>
    </div>
</template>

<script>
import BarQuote from './BarQuote.vue'
export default {
    props: ['quotes'],

    components: {
        appBarQuote: BarQuote
    },

    methods: {
        deleteQuote(index) {
            this.$emit('quoteDeleted', index)
        }
    }
}
</script>

<style scoped>
    
</style>