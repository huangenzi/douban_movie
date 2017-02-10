<template>
	<div class="app">
		<nav>正在热映</nav>
		<movie :movie="movie"></movie>
	</div>
</template>

<script>
 	import movie from './components/movie/movie.vue';
	export default {
		data() {
			return {
				movie: []
			};
		},
		created() {
		    this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters',{},{
				header: {
					"Content-type": "json"
				},
				emulateJSON: true
			}).then(response => {
					response = response.body;
					 console.log(response);
					this.movie = response.subjects;
					
			});
		},
		methods: {
		
		},
		components: {
			movie
		}
	};
</script>

<style>
*{
	margin: 0;
	padding: 0;
}
.app nav {
	background: #396;
	color: #fff;
	height: 48px;
	line-height: 48px;
	text-align: center;
}
</style>