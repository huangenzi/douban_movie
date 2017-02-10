<template>
	<div class="movie">
		<ul class="list">
			<li v-for="item in movie" class="movie-item">
				<img class="avatar" :src="item.images.medium"/>
				<div class="content">
					<h1 class="name">{{item.title}}</h1>
					<div>类型： <span v-for="genres in item.genres">{{genres}}</span></div>
					<div>导演： {{item.directors[0].name}}</div>
					<div>主演：
						<span v-for="casts in item.casts">
							{{casts.name}}
						</span>
					</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: {
            movie: {
                type: Array
            }
        }
	};
</script>

<style>
	.list .movie-item{
		display: flex;
		padding: 18px;
		border-bottom: 1px solid #b5b5b5;
	}
	.movie-item .avatar {
		flex: 0 0 80px;
		width: 80px;
		height: 120px;
	}
	
	.movie-item .content{
		flex: 1;
		font-size: 12px;
	}
	.content .name{
		font-size: 16px;
		padding: 8px 0 14px 18px;
		line-height: 16px;
	}
	.content div{
		padding: 2px 0 4px 18px;
	}
	.content div span{
		padding-right: 4px;
	}
</style>