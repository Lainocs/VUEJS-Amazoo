<template>
	<div>
		<h1>Login</h1>
		<form @submit.prevent="login">
			<label for="email">Email</label>
			<input type="email" id="email" v-model="user.email">
			<label for="password">Password</label>
			<input type="password" id="password" v-model="user.password">
			<button type="submit">Login</button>
		</form>
	</div>
</template>
<script>
	export default {
		name: 'LoginView',
		data() {
			return {
				user: {
					email: '',
					password: '',
				}
			}
		},
		methods: {
			login() {
				this.$axios.post('/login', this.user)
					.then((payload) => {
						let user = JSON.stringify(payload.data)
						localStorage.setItem('user', user)
						this.$parent.$parent.login(user)
						this.$router.push('/profile')
					})
					.catch(error => {
						console.log(error)
					})
			}
		}

	}
</script>