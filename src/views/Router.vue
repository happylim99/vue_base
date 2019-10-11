<template>
	<div>
		<h2>The Router Page</h2>
		<hr>
		<p>Loaded ID : {{ id }}</p>
		<button @click="navigateToHome">Go to home</button>
		<button @click="navigateToRouterWithID">Go to Router ID</button>
		<br><br>
		<!-- <app-router-user-start /> -->
		<!-- <transition name="slide" mode="out-in"> -->
			<router-view />
		<!-- </transition> -->
		<router-view name="top" />
	</div>
</template>

<script>
//import RouterUserStart from '../components/RouterUser/RouterUserStart'
export default {
	data() {
		return {
			id: this.$route.params.id
		}
	},

	components: {
		//appRouterUserStart: RouterUserStart
	},

	watch: {
		'$route'(to, from) {
			this.id = to.params.id
		}
	},

	methods: {
		navigateToHome() {
			// this.$router.push('/')
			this.$router.push({ name: 'home' } )
		},
		navigateToRouterWithID() {
			this.$router.push('/router/5')
		}
	}
}
</script>

<style scoped>
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
</style>