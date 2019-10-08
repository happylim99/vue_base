<template>
	<div class="row">
		<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
			<h3 class="animated fadeIn">Animations</h3>
			<hr>
			<select v-model="alertAnimation" class="form-control">
				<option v-for="(option, index) in options" :key="index" :value="option">{{ option }}</option>
			</select>
			<button class="btn btn-primary" @click="show = !show">Show Alert</button>
			<br><br>
			<transition :name="alertAnimation">
				<div class="alert alert-info" v-if="show">This is some info</div>
			</transition>
			<!-- state that animation dictate the time length -->
			<transition :name="alertAnimation" type="animation">
				<div class="alert alert-info" v-if="show">This is some info</div>
			</transition>
			<transition :name="alertAnimation" type="animation" appear>
				<div class="alert alert-info" v-if="show">This is some info</div>
			</transition>
			<!-- note: we can use all of the 4 class -->
			<transition :name="alertAnimation">
				<div class="alert alert-info" v-if="show">This is some info</div>
			</transition>
			<transition :name="alertAnimation" mode="out-in">
				<div class="alert alert-info" v-if="show" key="info">This is some info</div>
				<div class="alert alert-warning" v-else key="warning">This is some warning</div>
			</transition>
			<hr>
			<button class="btn btn-primary" @click="load = !load">Load / Remove Element</button>
			<br><br>
			<transition
				@before-enter="beforeEnter"
				@enter="enter"
				@after-enter="afterEnter"
				@enter-cancelled="enterCancelled"

				@before-leave="beforeLeave"
				@leave="leave"
				@after-leave="afterLeave"
				@leave-cancelled="leaveCancelled"
				:css="false">
				<div class="green-box" v-if="load"></div>
			</transition>
			<hr>
			<button class="btn btn-primary" @click="selectedComponent == 'app-success-alert' ? selectedComponent = 'app-danger-alert' : selectedComponent = 'app-success-alert'">Toggle</button>
			<br><br>
			<transition :name="alertAnimation" mode="out-in">
				<component :is="selectedComponent" />
			</transition>
			<hr>
			<button class="btn btn-primary" @click="addItem">Add Item</button>
			<ul class="list-group">
				<transition-group :name="alertAnimation">
					<li class="list-group-item" v-for="(number, index) in numbers" :key="number" @click="removeItem(index)" style="cursor: pointer">{{ number }}</li>
				</transition-group>
			</ul>
		</div>
	</div>
</template>

<script>
import DangerAlert from '../components/Alert/DangerAlert'
import SuccessAlert from '../components/Alert/SuccessAlert'
export default {
	data() {
		return {
			show: false,
			load:true,
			options: ['fade', 'slide', 'bounce'],
			alertAnimation: 'fade',
			elementWidth: 100,
			selectedComponent: 'app-success-alert',
			numbers: [1, 2, 3, 4, 5]
		}
	},

	components: {
		appDangerAlert: DangerAlert,
		appSuccessAlert: SuccessAlert
	},

	methods: {
		beforeEnter(el) {
			console.log('beforeEnter')
			this.elementWidth = 100
			el.style.width = this.elementWidth + 'px'
		},
		enter(el, done) {
			console.log('enter')
			let px = 10
			const interval = setInterval(() => {
				el.style.width = (this.elementWidth + px) + 'px'
				px+=10
				if(px > 200) {
					clearInterval(interval)
					done()
				}
			}, 20)
		},
		afterEnter(el) {
			console.log('afterEnter')
		},
		enterCancelled(el) {
			console.log('enterCancelled')
		},
		beforeLeave(el) {
			console.log('beforeLeave')
			this.elementWidth = 300
			el.style.width = this.elementWidth + 'px'
		},
		leave(el, done) {
			console.log('leave')
			let px = 10
			const interval = setInterval(() => {
				el.style.width = (this.elementWidth - px) + 'px'
				px+=10
				if(px > 200) {
					clearInterval(interval)
					done()
				}
			}, 20)
		},
		afterLeave(el) {
			console.log('afterLeave')
		},
		leaveCancelled(el) {
			console.log('leaveCancelled')
		},
		addItem() {
			const pos = Math.floor(Math.random() * this.numbers.length)
			this.numbers.splice(pos, 0, this.numbers.length +1);
		},
		removeItem(index) {
			this.numbers.splice(index, 1)
		}
	}
}
</script>

<style scoped>
	.green-box {
		width: 300px;
		height: 100px;
		background-color: lightgreen;
	}

	.fade-enter {
		opacity: 0;
	}

	.fade-enter-active {
		transition: opacity 1s;
	}

	.fade-leave {
		 /* opacity: 1;  */
	}

	.fade-leave-active {
		transition: opacity 1s;
		opacity: 0;
	}

	.slide-enter {
		 /* transform: translateY(20px);  */
	}
	/* forwards: make it stop where it ends */
	.slide-enter-active {
		animation: slide-in 1s ease-out forwards;
		transition: opacity .5s;
	}

	.slide-leave {

	}

	.slide-leave-active {
		animation: slide-out 1s ease-out forwards;
		transition: opacity 3s;
		opacity: 0;
		position: absolute;
	}

	.slide-move {
		transition: transform 1s;
	}

	@keyframes slide-in {
		from {
			transform: translateY(20px);
		}
		to {
			transform: translateY(0);
		}
	}

	@keyframes slide-out {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(20px);
		}
	}

	.bounce-enter-active {
		animation: bounce-in .5s;
	}
	.bounce-leave-active {
		animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
	}

</style>