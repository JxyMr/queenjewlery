<style scoped lang="stylus">
	.nav
		height 40px
		background-color rgb(188,188,188)
		position relative
		z-index 10
		clear both
		.w1180
			.all
				float left
				width 180px
				height @height
				text-align center
				line-height @height
				background-color #aeaeae
				position relative
				color #000
				font-family Arial
				font-size 14px
				&:hover
					.fixedbox
						display block
				.fixedbox
					width 138px
					border 1px solid #ccc
					background-color #fff
					padding 10px 20px 0
					text-align left
					line-height 20px
					display none
					overflow hidden
					dt
						font-weight 700
						clear both
						font-size 15px
						margin-bottom 10px
					dd
						float left
						margin-right 10px
						margin-bottom 24px
						font-size 13px
				&:before
					content ""
					background url("../assets/icon1.png") no-repeat
					width 15px
					height 12px
					position absolute
					display inline-block
					top 15px
					left 16px
				&:after
					content ""
					width 5px
					height 5px
					border-left 1px solid #000
					border-bottom 1px solid #000
					display inline-block
					transform rotate(-45deg)
					position absolute
					top 16px
					right 22px
			.list
				padding-left 14px
				float left
				a
					padding 0 30px
					font-size 14px
					line-height @height				
				
					
</style>
<template>
	<div class="nav">
		<div class="w1180">
			<div class="all">全部商品
				<div class="fixedbox">
					<dl v-for="item of fixedbox">
						<dt>{{item.tit}}</dt>
						<a href="#"><dd v-for="list of item.menu">{{list}}</dd></a>
					</dl>
				</div>
			</div>
			<div class="list">
				<router-link v-for="item of list" :to="item.href">{{item.name}}</router-link>
			</div>			
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list:[
					{
						name : "首页",
						href : "/home"
					},
					{
						name : "品牌首发",
						href : "/brandNew"
					},
					{
						name : "品牌街",
						href : "/brand"
					},
					{
						name : "为我代言",
						href : "/me"
					},
					{
						name : "创意申请",
						href : "/apply"
					},
					{
						name : "活动",
						href : "/activity"
					}

				],
				fixedbox:[
					{
						tit : "钻石",
						menu:["30分","50分","克拉钻"]
					},
					{
						tit : "钻戒",
						menu:["30分","50分","铂金"]
					},
					{
						tit : "对戒",
						menu:["铂金对戒","k金对戒"]
					},
					{
						tit : "配饰",
						menu:["吊坠","项链","套链"]
					},
					{
						tit : "系列产品",
						menu:["宠爱婚戒"]
					},
					{
						tit : "热门产品",
						menu:["50分裸钻","70分裸钻"]
					}
				]
			}
		}
	};
</script>