<style scoped lang="stylus">
	.home
		overflow hidden
	.banner
		height 350px
		overflow hidden
		position relative
		.tab
			position absolute
			bottom 16px
			left 50%
			transform translate(-50%)
			a
				display inline-block
				width 60px
				height 4px
				background-color #bcbcbc
				margin-right 16px
				&:last-child
					margin-right 0
				&.current
					background-color white
		ul
			width 99999px				
		li
			float left
			height @height	
			position relative
			img
				width 100%
				height 100%
		.banner-tit
			position absolute
			top 124px
			left 500px
			p
				color white
				font-size 36px
				font-weight 700
				line-height 48px
	.ranking,.new,.represent,.myfashion
		overflow hidden
		margin-top 20px
	.tit
		height 48px
		overflow hidden
		margin-bottom 20px
		h2
			float left
			font-size 24px
			color #333
			font-weight 700
			line-height 48px
		.add
			width 48px
			height @width
			border-radius 50%
			background-color #f2f2f2
			float right
			text-align center
			line-height 48px
			font-size 26px
			font-weight 600
			color #bcbcbc
	.ranking		
		.list
			li
				float left
				margin-bottom 30px
				.head-img
					width 222px
					height @width
					margin-right 16px
					background-size 100% 100%
				&:nth-of-type(5),&:nth-of-type(10)
					.head-img
						margin-right 0
				p
					margin-top 14px
					text-indent 20px
					.name
						margin-right 18px
						font-size 16px
						line-height 20px
						color #333
					.pop
						font-size 12px
						&:before
							content ""
							width 14px
							height 12px
							display inline-block
							background url("../assets/icon2.png") no-repeat
							margin-right 10px
	.new
		.new-items
			height 340px
			position relative
			margin-bottom 30px
			.logo
				position absolute
				font-family Arial
				font-weight 700
				font-style normal
				font-size 24px
				text-align left
				line-height normal
				margin-top 32px
				margin-left 36px
				color white
			.box
				width 400px
				height 300px
				position absolute
				top 20px
				right 22px
				background-repeat no-repeat
				.top
					height 30px
					background-color #6b6b6b
					color white
					font-size 13px
					line-height @height
				.detail
					padding 40px 0 24px 240px
					background-repeat no-repeat
					background-position 20px center
					background #FFF
					position relative
					.head-img
						width 180px
						height 180px
						position absolute
						left 20px
						top 40px
						background-size 100% 100%
					.name
						font-size 14px
						color #333
						font-weight 700
						span
							font-size 24px
					.motto
						margin-top 24px
						margin-bottom 26px
						p
							font-size 14px
							line-height 20px
					.cli
						position relative
						margin-bottom 20px
						a
							vertical-align middle
							&:not(".buy")
								margin-right 10px
							&.buy
								display inline-block
								width 98px
								height 28px
								border 1px solid #797979
								background-color #515151
								color white
								font-size 12px
								line-height 28px
								text-align center
								font-family Arial
								right 0
								top -4px
								position absolute
					.love,.bought
						font-size 14px
					.love
						margin-bottom 10px								 

</style>
<template>
	<div class="home">
		<div class="banner">
			<ul>
				<li v-for="item of banner">
					<img :src="item.imgUrl" alt="" />
				</li>
			</ul>
			<div class="banner-tit">
				<p>我是女王，我做主！</p>
				<p>我的品牌我代言！</p>
			</div>	
			<div class="tab">
				<a href="#" class="current"></a>
				<a href="#"></a>
				<a href="#"></a>
				<a href="#"></a>
			</div>
		</div>
		<div class="ranking w1180">
			<div class="tit">
				<h2>女王人气top10</h2>
				<div class="add">+</div>
			</div>
			<div class="list">
				<ul>
					<li v-for="item of list">
						<div class="head-img" :style="{'background-image':'url('+item.imgUrl+')'}"></div>
						<p>
							<span class="name">Queenjewlery</span>
							<span class="pop">999</span>
						</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="new w1180">
			<div class="tit">
				<h2>首发品牌</h2>
				<div class="add">+</div>
			</div>
			<div class="new-items" v-for="item of newItems" :style="{'background-image':'url('+item.bgUrl+')'}">
				<div class="logo">LOGO</div>
				<div class="box">
					<p class="top"></p>
					<div class="detail">
						<div class="head-img" :style="{'background-image':'url('+item.imgUrl+')'}"></div>
						<p class="name">代言人:<span></span></p>
						<div class="motto">
							<p>22</p>
							<p>22</p>
						</div>
						<div class="cli">
							<a href="#"><img src="../assets/icon3.png" alt="1"></a>
							<a href="#"><img src="../assets/icon4.png" alt="2"></a>
							<a href="#" class="buy">立即购买</a>	
						</div>
						<p class="love">人喜欢</p>
						<p class="bought">人已经购买</p>
					</div>
				</div>
			</div>
		</div>
		<div class="represent w1180">
			<div class="tit">
				<h2>为我代言</h2>
				<div class="add">+</div>
			</div>
		</div>
		<div class="myfashion w1180">
			<div class="tit">
				<h2>我的时尚</h2>
				<div class="add">+</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				banner:[
					{
						imgUrl:require("../assets/banner01.jpg"),
						
					},
					{
						imgUrl:require("../assets/banner02.jpg"),
						
					},
					{
						imgUrl:require("../assets/banner03.jpg"),
						
					},
					{
						imgUrl:require("../assets/banner04.jpg"),
						
					},
				],
				list:[
					{
						imgUrl:require("../assets/head-img01.png"),
					},
					{
						imgUrl:require("../assets/head-img02.png"),
					},
					{
						imgUrl:require("../assets/head-img03.png"),
					},
					{
						imgUrl:require("../assets/head-img04.png"),
					},
					{
						imgUrl:require("../assets/head-img05.png"),
					},
					{
						imgUrl:require("../assets/head-img06.png"),
					},
					{
						imgUrl:require("../assets/head-img07.png"),
					},
					{
						imgUrl:require("../assets/head-img08.png"),
					},
					{
						imgUrl:require("../assets/head-img09.png"),
					},
					{
						imgUrl:require("../assets/head-img10.png"),
					}

				],
				newItems:[
					{
						bgUrl:require("../assets/newbg01.jpg"),
						imgUrl:require("../assets/head-img03.png"),
						time:{
							day:20,
							hour:18,
							min:18,
							sco:18
						},
						name:"Queen",
						love:9999,
						buy:10000,
						motto:["拒绝平庸，追求卓越","凸显个性，绝不将就"],
					},
					{
						bgUrl:require("../assets/newbg02.jpg"),
						imgUrl:require("../assets/head-img05.png"),
						time:{
							day:20,
							hour:18,
							min:18,
							sco:18
						},
						name:"Queen",
						love:9999,
						buy:10000,
						motto:["拒绝平庸，追求卓越","凸显个性，绝不将就"],
					},
					{
						bgUrl:require("../assets/newbg03.jpg"),
						imgUrl:require("../assets/head-img07.png"),
						time:{
							day:20,
							hour:18,
							min:18,
							sco:18
						},
						name:"Queen",
						love:9999,
						buy:10000,
						motto:["拒绝平庸，追求卓越","凸显个性，绝不将就"],
					}
				]
			}
		}
	}
</script>