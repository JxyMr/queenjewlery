<style scoped lang="stylus">
	img
		border none
		vertical-align middle
		width 100%
		height 100%
	.brandNew
		margin-top 50px	
	.new-today
		width 880px
		float left
		position relative
		.new
			position absolute
			top 0
			left 0
			width 100px
			height 30px
			line-height 30px
			text-align center
			background-color #797979
			color white
			font-size 13px
			font-family Arial
		.list
			height 252px
			margin-bottom 20px
			box-shadow 3px 3px 2px rgba(0,0,0,.3)
			.image
				float left
				width 600px
			.infor-detail
				width 280px
				text-align center
				float left
				.name
					margin-top 40px
					font-size 48px
					font-weight 700
					line-height normal
				.keywords
					margin-top 8px
					span
						margin-left 10px
						 
					
					 
	.recommend
		width 228px
		margin-left 20px		

</style>
<template>
	<div class="brandNew w1180">
		<div class="new-today">
			<div class="new">今日首发</div>
			<div class="list" v-for="item of list">
				<div class="image"><a href="#"><img :src="item.imgUrl" alt=""></a></div>
				<div class="infor-detail">
					<p class="name">{{item.name}}</p>
					<p class="keywords"><span v-for="word of item.keywords" >{{word}}</span></p>
					<p class="line"></p>
				</div>
			</div>
		</div>
		<div class="recommend">
			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				list:[
					{
						imgUrl:require("../assets/Brandnew/1.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/2.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/6.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/4.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/5.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/6.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/2.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/1.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/6.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/5.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					},
					{
						imgUrl:require("../assets/Brandnew/6.jpg"),
						name:"logo",
						keywords:["Queen Jewelry","新宠"],
						overtime:{
							day:12,
							hour:12,
							minute:12,
							second:12
						},
					}
				]
			}
		}
	}
</script>