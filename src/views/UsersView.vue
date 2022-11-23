<template>
  <div class="users">
    <h1>This is the users page</h1>
		<div>
			<div v-for="user in users" :key="user.id" class="card">
				<router-link :to="'users/' + user.id">
					<div>
						<h2>{{ user.name }}</h2>
						<p>{{ user.email }}</p>
					</div>
				</router-link>
				<button @click="deleteUser(user.id)">X</button>
			</div>
		</div>
  </div>
</template>
<script>
	export default {
		name: 'UsersView',
		data() {
			return {
				users: [],
			}
		},
		methods: {
			getUsers() {
				// get users from api localhost:3000/users
				this.$axios.get('/users')
					.then(response => {
						this.users = response.data
					})
					.catch(error => {
						console.log(error)
					})
			},
			deleteUser(id) {
				this.$axios.delete(`/users/${id}`)
					.then(() => {
						this.getUsers()
					})
					.catch(error => {
						console.log(error)
					})
			},
		},
		mounted() {
			this.getUsers()
		}
	}
</script>
<style>
	.card {
		background-color: #fff;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 10px;
		margin: 10px;
		text-decoration: none;
	}

	.card a {
		text-decoration: none;
		color: #000;
	}

	.card button {
		background-color: #f00;
		color: #fff;
		border: none;
		border-radius: 5px;
		padding: 5px;
	}
</style>