<template>
    <div class='row'>
        <div class="col-xs-12">
            <button @click="selectedComponent = 'appQuote'">Quote</button>
            <button @click="selectedComponent = 'appAuthor'">Author</button>
            <button @click="selectedComponent = 'appNew'">New</button>
            <hr>
            <p>{{ selectedComponent }}</p>
            <keep-alive>
                <component :is="selectedComponent"></component>
            </keep-alive>
            <!-- <app-quote>
            <h2 slot='title'>Slot title</h2>
            <h3 slot='subtitle'>Source subtitle</h3>
            <p>Slot without slot name is slot : {{data}}</p>
            </app-quote> -->
        </div>
    </div>
</template>

<script>
import Quote from '../components/Quote/Quote.vue'
import Author from '../components/Quote/Author.vue'
import New from '../components/Quote/New.vue'

export default {
    data() {
        return {
            data: 'aa',
            selectedComponent: 'appQuote'
        }
    },

    components: {
        appQuote: Quote,
        appAuthor: Author,
        appNew: New
    }
}
</script>