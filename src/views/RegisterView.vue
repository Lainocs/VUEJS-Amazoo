<template>
	<div>
		<h1>Register</h1>
		<form @submit.prevent="register">
			<label for="name">Name</label>
			<input type="text" id="name" v-model="user.name">
			<label for="email">Email</label>
			<input type="email" id="email" v-model="user.email">
			<label for="password">Password</label>
			<input type="password" id="password" v-model="user.password">
			<label for="age">Age</label>
			<input type="number" id="age" v-model="user.age">
			<label for="city">City</label>
			<input type="text" id="city" v-model="user.city">
			<button type="submit">Create User</button>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'RegisterView',
		data() {
			return {
				user: {
					name: '',
					email: '',
					password: '',
					age: '',
					city: ''
				}
			}
		},
		methods: {
			register() {
				this.$axios.post('/register', this.user)
					.then(() => {
						this.$router.push('/users')
					})
					.catch(error => {
						console.log(error)
					})
			}
		}

	}
</script>