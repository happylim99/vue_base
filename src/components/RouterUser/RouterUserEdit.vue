<template>
	<div>
		<h3>Edit User</h3>
		<p>User ID : {{ $route.params.id }}</p>
		<p>Locale: {{ $route.query.locale }}</p>
		<p>q: {{ $route.query.q }}</p>
		<hr>
		<button class="btn btn-primary" @click="confirmed = true">Confirm</button>
		<div style="height: 700px"></div>
		<p id="data">some extra data</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			confirmed: false
		}
	},

	beforeRouteLeave(to, from, next) {
		if(this.confirmed) {
			next()
		} else {
			if(confirm('Are you sure to leave')) {
				next()
			} else {
				next(false)
			}
		}
	}
}
</script>

<style scoped>

</style>