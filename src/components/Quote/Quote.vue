<template>
    <div>
        <slot name='title' />
        <slot name='subtitle'>The subtitle</slot>
        <div class="aaa">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    div {
        border: 1px solid #ccc;
        box-shadow: 1px 1px black;
        padding: 30px;
        margin: auto;
        text-align: center;
    }
    h2 {
        color: red
    }
    .aaa {
        color: blue
    }
</style>