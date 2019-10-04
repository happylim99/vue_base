<template>
    <div>
        <h3>New Quote: {{ counter }}</h3>
        <button @click="counter++">Increase</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    }
}
</script>

<style scoped>

</style>