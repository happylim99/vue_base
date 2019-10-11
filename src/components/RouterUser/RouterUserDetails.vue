<template>
	<div>
		<h3>Some User Details</h3>
		<p>User loaded had ID : {{ $route.params.id }}</p>
		<!-- <router-link class="btn btn-primary" tag="button" :to="'/router_user/' + $route.params.id + '/edit'">Edit User</router-link> -->
		<router-link class="btn btn-primary" tag="button" :to="link">Edit User</router-link>
	</div>
</template>

<script>
export default {
	data() {
		return {
			link: { 
				name: 'routerUserEdit', 
				params: { 
					id: this.$route.params.id
				}, 
				query: { 
					locale: 'en', q: 100
				},
				hash: '#data'
			}
		}
	},

	beforeRouteEnter(to, from, next) {
		console.log('before route enter')
		/*
		next(vm => {
			console.log(vm)
		})
		*/
		next()
	}
}
</script>

<style scoped>

</style>