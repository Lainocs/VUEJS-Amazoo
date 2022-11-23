<template>
  <div class="users">
    <h1>This is the {{user.name}} page</h1>
		<div>
			<div>
				<h2>{{ user.name }}</h2>
				<p>{{ user.email }}</p>
				<p>{{ user.age }} ans</p>
				<p>{{ user.city }}</p>
			</div>
		</div>
  </div>
</template>
<script>
	export default {
		name: 'ProfileView',
		data() {
			return {
				user: this.$user
			}
		},
	}
</script>