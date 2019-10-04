<template>
    <div>
        <app-progress-bar :quoteCount="quotes.length" :maxQuotes="maxQuotes" />
        <app-new-quote @quoteAdded="newQuote"></app-new-quote>
        <app-bar-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></app-bar-quote-grid>
        <div class="col-sm-12 text-center">
            <div class="alert alert-info">
                Info: Click on quote to delete
            </div>
        </div>
    </div>
</template>

<script>
import BarQuoteGrid from '../components/BarQuote/BarQuoteGrid'
import NewQuote from '../components/BarQuote/NewQuote'
import ProgressBar from '../components/BarQuote/ProgressBar'

export default {
    data() {
        return {
            quotes: [
                'Just a quote to see something'
            ],
            maxQuotes: 10
        }
    },

    methods: {
        newQuote(quote) {
            if(this.quotes.length >= this.maxQuotes) {
                return alert('Please delete Quotes first!')
            }
            this.quotes.push(quote)
        },
        deleteQuote(index) {
            this.quotes.splice(index, 1)
        }
    },

    components: {
        appBarQuoteGrid: BarQuoteGrid,
        appNewQuote: NewQuote,
        appProgressBar: ProgressBar
    }
}
</script>

<style scoped>

</style>