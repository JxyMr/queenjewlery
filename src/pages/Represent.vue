<style scoped lang="stylus">
	.represent
		overflow hidden
		.tit
			margin 50px 0 30px
		.main
			width 100%
			overflow hidden
			.infor
				width 580px
				height 200px
				margin-top 20px	
				&:nth-of-type(odd)					
					margin-right 20px	
				.img
					width 380px
					height 200px
					img
						width 100%
						height 100%
				.fixbox
					position relative
					width 180px
					padding-left 20px
					.name
						font-size 24px
						margin-top 20px
					.btn
						position absolute
						right 0
						color white
						width 98px
						height 28px
						border 1px solid #797979
						font-size 13px
						text-align center
						line-height 28px
						&.my-represent
							background-color #515151
							top 75px
						&.buy
							background-color #797979
							top 115px
					.icon
						margin-top 50px
						margin-bottom 16px
						img
							width 22px
							height 22px	
					p
						font-size 13px
						line-height 24px
		.pages
			margin 40px 0 20px
			float right
			a
				padding 5px 11px
				border 1px solid #d7d7d7
				font-size 14px
				line-height 1
				margin-left 15px 
							
</style>
<template>
	<div class="represent w1180">
			<div class="tit">
				<h2>为我代言！</h2>
			</div>
			<div class="main">
				<div class="infor fl" v-for="item of respresent">
					<div class="img fl"><img :src="item.imgUrl" alt=""></div>
					<div class="fixbox fl">
						<p class="name">{{item.name}}</p>
						<p class="icon"><a href="#"><img src="../assets/icon3.png" alt="1"></a>
							<a href="#"><img src="../assets/icon4.png" alt="2"></a></p>
						<p>{{item.likes}}人喜欢</p>
						<p>{{item.bought}}人已经购买</p>
						<a href="#" class="btn my-represent">我要代言</a>
						<a href="#" class="btn buy">立刻购买</a>
					</div>
				</div>
			</div>
			<div class="pages">
				<span>99条记录</span>
				<span>1/9页</span>
				<a href="#">1</a>
				<a href="#">2</a>
				<a href="#">3</a>
				<a href="#">4</a>
				<a href="#">5</a>
				<a href="#">下一页</a>
				<a href="#">尾页</a>
			</div>
		</div>
</template>
<script>
	export default{
		data(){
			return{
				respresent:[
					{
						imgUrl:require("../assets/respresent01.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent02.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent03.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent04.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent01.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent02.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent03.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent04.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent01.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent02.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent03.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
					{
						imgUrl:require("../assets/respresent04.jpg"),
						name:"QueenJewlery",
						likes:9999,
						bought:10000
					},
				]
			}
		}
	}
</script>