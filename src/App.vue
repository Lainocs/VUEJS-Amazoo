<template>
	<nav>
		<router-link to="/">Home</router-link> |
		<router-link to="/users">Users</router-link> |
		<div v-if="!user">
			<router-link to="/register">Register</router-link> |
			<router-link to="/login">Login</router-link>
		</div>
		<div v-else>
			<router-link to="/profile">Profile</router-link> |
			<a @click="logout()">Logout</a>
		</div>
	</nav>
	<router-view />
</template>

<script>
	export default {
		name: 'App',
		emits: ['login'],
		data() {
			return {
				user: this.$user
			}
		},
		methods: {
			logout() {
				localStorage.removeItem('user')
				this.user = null
				this.$router.push('/')
			},
			login(user) {
				this.user = user
			}
		}
	}
</script>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	nav {
		padding: 30px;
	}

	nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
