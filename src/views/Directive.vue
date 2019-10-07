<template>
    <div>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Directives</h1>
                <p v-text="'Some text'"></p>
                <p v-html="'<strong>Some strong text</strong>'"></p>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <!-- <h1 v-highlight="'red'">Custom Directives</h1> -->
                <H2 v-highlight="'red'">Custom Directives</H2>
                <H2 v-highlight:background="'red'">Custom Directives</H2>
                <H2 v-delay:background.delayed="'blue'">Custom Directives</H2>
				<!-- <H2 v-local-highlight:background.blink="'lime'">Custom local Directives</H2> -->
				<H2 v-local-highlight:background.blink="{mainColor: 'lime', secondColor:'yellow', blinkInterval: '500'}">Custom local Directives</H2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	directives: {
		'local-highlight': {
			bind(el, binding, vnode) {
				if(binding.modifiers['blink']) {
					// let mainColor = binding.value;
					// let secondColor = 'blue';
					let mainColor = binding.value.mainColor
					let secondColor = binding.value.secondColor
					let currentColor = 'mainColor'
					setInterval(() => {
						currentColor == secondColor ? currentColor = mainColor : currentColor = secondColor
						if(binding.arg == 'background') {
							el.style.backgroundColor = currentColor
						} else {
							el.style.backgroundColor = currentColor
						}
					},binding.value.blinkInterval)
				}
				/*
				if(binding.arg == 'background') {
					el.style.backgroundColor = binding.value
				} else {
					el.style.color = binding.value
				}
				*/
			}
		}
	}
}
</script>

<style scoped>

</style>