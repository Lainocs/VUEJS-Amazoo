<template>
  <div class="users">
    <h1>This is the {{user.name}} page</h1>
		<div>
			<div>
				<h2>{{ user.name }}</h2>
				<p>{{ user.email }}</p>
			</div>
		</div>
  </div>
</template>
<script>
	export default {
		name: 'UserView',
		data() {
			return {
				user: []
			}
		},
		methods: {
			getUser() {
				this.$axios.get(`/users/${this.$route.params.id}`)
					.then(response => {
						this.user = response.data[0]
					})
					.catch(error => {
						console.log(error)
					})
			},
		},
		created() {
			this.getUser()
		}
	}
</script>