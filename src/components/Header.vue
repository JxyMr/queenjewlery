<style lang="stylus">
	.header
		width 100%
		position relative
		z-index 9999
		.loginbar
			height 30px
			background rgb(242,242,242)
			line-height 30px
			.tel
				font-size 14px
				line-height 30px
				color #333
			.login
				a
					font-size 14px
					line-height 30px
					padding 0 10px
					border-right 1px solid #333	
					&:last-child
						border-right none
						padding-right 0
		.logobar
			.logo
				margin-top 40px
				font-size 32px
				font-weight 700
				font-family Arial
				position relative
				span
					font-size 14px
					font-weight normal
					position relative
					vertical-align middle
					display block
					float right
					top 10px
					left 30px
					&:after
						content ""
						border 6px solid transparent
						border-top-color #000
						position absolute
						top 4px
						left 32px
					&:hover 
						.city
							display block	
					.city
						width 418px
						height 108px
						border 1px solid #bcbcbc
						position absolute
						z-index 20
						background-color #fff
						left 0
						padding 10px 15px
						display none
						p
							margin-top 10px
							a
								margin-left 10px
							
					
			.searchbar
				margin-top 36px
				position relative
				margin-left 200px
				.search
					width 490px
					height 38px
					border 1px solid rgb(228,228,228)
					border-right none
					outline none
					color #bcbcbc
					font-size 15px
					padding-left 16px
				.hot
					position absolute
					left 275px
					top 12px
					a
						margin-left 10px	
						background-color #f3f3f3
						font-size 14px
						color #666
						line-height 20px
				.search-btn
					width 40px
					height @width
					border 1px solid rgb(228,228,228)
					background-color white
					vertical-align top
					margin-left -5px
					outline none
					cursor pointer
					background url("../assets/u172.png") no-repeat center center
					text-indent 9999px
				.my-box
					width 110px
					height 38px
					display block
					float right
					margin-left 20px
					line-height 38px
					border 1px solid rgb(228,228,228)
					padding-left 20px
					font-size 14px
					position relative
					&:after
						content ""
						border 5px solid transparent
						border-top-color #a1a1a1
						position absolute
						top 20px
						left 100px
			.WeChat
				margin-top 10px
				margin-left 74px
				p
					font-size 14px
					text-align center
					margin 4px 0 14px
					font-family Arial					 

</style>
<template>
	<div class="header">
		<div class="loginbar">
			<div class="w1180">
				<div class="tel fl">热线电话：12345678912</div>
				<div class="login fr">
					<router-link v-for="item of nav" :to="item.href">{{item.text}}</router-link>
				</div>
			</div>
		</div>
		<div class="logobar">
			<div class="w1180">
				<div class="logo fl">
					LOGO
					<span>广东
						<div class="city" >
							<p v-for="item of citylist"><i>{{item.tab}}</i><a href="#" v-for="list of item.city">{{list}}</a></p>
						</div>
					</span>
					
				</div>
				<div class="searchbar fl">
					<input type="text" class="search" value="搜索您需要的关键词"/>
					<div class="hot">
						<a v-for="item of hot" :href="item.href">{{item.text}}</a>
					</div>
					<input type="button" value="按钮" class="search-btn" />
					<a href="#" class="my-box">我的首饰盒</a>
				</div>
				<div class="WeChat fl">
					<img src="../assets/weixin.png" alt="" />
					<p>关注微信</p>
				</div>
				
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				nav:[
					{
						text:"登录",
						href:"/login"
					},
					{
						text:"注册",
						href:"/register"
					},
					{
						text:"品牌商",
						href:"/"
					},
					{
						text:"女王帮助",
						href:"/"
					},

				],
				hot:[
					{
						text:"QueenJewely",
						href:"#"
					},
					{
						text:"钻戒",
						href:"#"
					},
					{
						text:"铂金对戒",
						href:"#"
					}
				],
				citylist:[
					{
						tab:"A-G",
						city:["北京","安徽","重庆","福建","广东","广西","甘肃","贵州" ]
					},
					{
						tab:"H-J",
						city:["河北","河南","海南","湖北","湖南","黑龙江","吉林","江苏","江西"]
					},
					{
						tab:"L-S",
						city:["辽宁","内蒙古","宁夏","青海","上海","四川","山东","山西","陕西"]
					},
					{
						tab:"T-Z",
						city:["天津","新疆","西藏","云南","浙江"]
					}
				]
			}
		}
	}
	var login = document.get
</script>