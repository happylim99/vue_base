<template>
	<div>
		<div class="row">
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3">
				<h2>Http</h2>
					<div class="form-group">
						<label for="Username">Username</label>
						<input type="text" class="form-control" v-model="user.username">
					</div>
					<div class="form-group">
						<label for="Email">Email</label>
						<input type="text" class="form-control" v-model="user.email">
					</div>
				<button class="btn btn-primary" @click="submit">Submit</button>
				<hr>
				<input class="form-control" type="text" v-model="node">
				<br><br>
				<button class="btn btn-primary" @click="fetchData">Get Data</button>
				<ul>
					<li class="list-group-item" v-for="(user, index) in users" :key="index">{{ user.email }} - {{ user.username }}</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			user: {
				username: '',
				email: ''
			},
			users: [],
			resource: {},
			node: 'data'
		}
	},

	methods: {
		submit() {
			/*
			this.$http.post('https://vuecli3-37025.firebaseio.com/data.json', this.user)
			.then(response => {
				console.log(response)
			}, error => {
				console.log('error' + error)
			})
			*/
			// this.resource.save({}, this.user)
			this.resource.saveAlt(this.user)
		},

		fetchData() {
			// this.$http.get('data.json')
			this.resource.getData({node: this.node})
			.then(response => {
				return response.json()
			})
			.then(data => {
				const resultArray = []
				for (let key in data) {
					resultArray.push(data[key]);
				}
				this.users = resultArray;
			})
		}
	},

	created() {
		const customActions = {
			saveAlt: { method: 'POST', url: 'alternative.json' },
			getData: { method: 'GET' }
		}
		// this.resource = this.$resource('data.json', {}, customActions)
		this.resource = this.$resource('{node}.json', {}, customActions)
	}
}
</script>

<style scoped>

</style>