<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>Switch Name: {{ switchName() }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName">Props custom event - Reset Name</button>
        <button @click="resetFn('Call back value', 'vvalue 2')">Props callback - Reset Name</button>
    </div>
</template>

<script>
import { eventBus } from '../../main'

export default {
    // props: ['name']
    // props: {name}
    // props: { name: [String, Array] },
    props: {
        name: {
            type: [String, Array],
            default: 'Max',
            required: true
        },
        resetFn: Function,
        userAge: Number
    },

    methods: {
        switchName() {
            return this.name.split("").reverse().join("");
        },
        resetName() {
            this.name = 'Sean'
            this.$emit('nameReset', this.name)
        }
    },

    created() {
        eventBus.$on('ageWasEdited', (age) => {
            this.userAge = age
        })
    }
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
