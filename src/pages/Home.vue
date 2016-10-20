<style scoped lang="stylus">
	.home
		overflow hidden
	/*.banner
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
		*/
	.bannerwrap
		position relative		
		.banner-tit
			position absolute
			top 124px
			left 500px
			z-index 2
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
							img
								width 22px
								height 22px
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
	.represent
		.main
			width 100%
			overflow hidden
			.infor
				width 580px
				height 200px
				&:nth-of-type(1),&:nth-of-type(3)					
					margin-right 20px
				&:nth-of-type(3),&:nth-of-type(4)
					margin-top 20px	
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
 	.myfashion
		margin-bottom 20px
		.fashion
			width 33.333%
			.fashion-tit
				font-size 20px
				font-weight 400
				margin-bottom 26px
				margin-top 10px
			.main
				a
					display inline-block
					vertical-align middle
					&.img
						width 180px
						height 162px
						img
							width 100%
							height 100%
							
					&.content
						width 176px
						font-size 14px
						line-height 24px
						margin-left 16px
			.infor
				margin-top 30px
				font-size 14px
				line-height 16px
				a
					margin-right 14px
					&.follow,&.likes,&.messages
						color #868686
						&:before
							content ""
							width 18px
							height 16px
							display inline-block
							vertical-align middle
							margin-right 4px
							margin-top -2px
					&.follow:before
						background url("../assets/icon3.png") no-repeat
						background-size 100%
						
					&.likes:before
						background url("../assets/icon4.png") no-repeat
						background-size 100%
							
					&.messages:before
						background url("../assets/icon5.png") no-repeat
						background-size 100%						 														 
</style>
<template>
	<div class="home">
		<!-- <div class="banner">
			<ul>
				<li v-for="item of banner">
					<img :src="item.imgUrl" alt="" />
				</li>
			</ul>
				
			<div class="tab">
				<a href="#" class="current"></a>
				<a href="#"></a>
				<a href="#"></a>
				<a href="#"></a>
			</div>
		</div> -->
		<div class="bannerwrap">
			<div class="banner-tit">
				<p>我是女王，我做主！</p>
				<p>我的品牌我代言！</p>
			</div>
			<banner :data="banner"></banner>
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
						<p class="name">代言人:<span>{{item.name}}</span></p>
						<div class="motto">
							<p>{{item.motto[0]}}</p>
							<p>{{item.motto[1]}}</p>
						</div>
						<div class="cli">
							<a href="#"><img src="../assets/icon3.png" alt="1"></a>
							<a href="#"><img src="../assets/icon4.png" alt="2"></a>
							<a href="#" class="buy">立即购买</a>	
						</div>
						<p class="love">{{item.love}}人喜欢</p>
						<p class="bought">{{item.buy}}人已经购买</p>
					</div>
				</div>
			</div>
		</div>
		<div class="represent w1180">
			<div class="tit">
				<h2>为我代言</h2>
				<div class="add">+</div>
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
		</div>
		<div class="myfashion w1180">
			<div class="tit">
				<h2>我的时尚</h2>
				<div class="add">+</div>
			</div>
			<div class="fashion fl" v-for="item of fashion">
				<p class="fashion-tit">{{item.tit}}</p>
				<div class="main">
					<a href="#" class="img"><img :src="item.imgUrl" alt=""></a><a href="#" class="content">{{item.content}}</a>
				</div>
				<div class="infor">
					<a href="#" class="name">{{item.name}}</a>
					<a class="time">{{item.time}}</a>
					<a href="#" class="follow">{{item.follow}}</a>
					<a href="#" class="likes">{{item.likes}}</a>
					<a href="#" class="messages">{{item.messages}}</a>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	/*import $ from "jquery"
	console.log($);*/
	import Banner from "../components/banner"
	export default{
		components:{
			Banner
		},
		data(){
			return{
				banner:[
					{
						name:"图片一",
						src:require("../assets/banner01.jpg"),
						
					},
					{
						name:"图片一",
						src:require("../assets/banner02.jpg"),
						
					},
					{
						name:"图片一",
						src:require("../assets/banner03.jpg"),
						
					},
					{
						name:"图片一",
						src:require("../assets/banner04.jpg"),
						
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
				],
				fashion:[
					{
						imgUrl:require("../assets/fashion01.jpg"),
						tit:"2015春夏流行色：魅惑黑色",
						content:"黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						time:"2015-06-02",
						follow:"999",
						likes:"99",
						messages:"99",
						name:"Queen"
					},
					{
						imgUrl:require("../assets/fashion03.jpg"),
						tit:"2015春夏流行色：魅惑黑色",
						content:"黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						time:"2015-06-02",
						follow:"999",
						likes:"99",
						messages:"99",
						name:"Queen"
					},
					{
						imgUrl:require("../assets/fashion02.jpg"),
						tit:"2015春夏流行色：魅惑黑色",
						content:"黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。",
						time:"2015-06-02",
						follow:"999",
						likes:"99",
						messages:"99",
						name:"Queen"
					}
				],
				respresent:[
					{
						imgUrl:require("../assets/respresent01.jpg"),
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
						imgUrl:require("../assets/respresent01.jpg"),
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
				]
			}
		}
	}
</script>