<style scoped lang="stylus">
	.login
		width 1000px
		margin 0 auto
		.logo
			height 95px
			line-height 95px
			font-size 48px
			font-weight 700
			border-bottom 1px solid #bcbcbc
		.title
			overflow hidden
			margin-top 26px
			margin-bottom 40px
			line-height 1.5
			.loginlink
				font-weight 700
				font-size 32px
		.loginbox
			padding 72px 80px
			border 1px solid #797979
			overflow hidden
			form
				float left
				input
					width 238px
					height 24px
					margin-bottom 26px
					border 1px solid #a9a9a9
					&.iptcode
						width 158px
				.code
					width 70px
					background-color #c9c9c9
					height 26px
					display inline-block
					text-align center
					line-height 26px
					vertical-align middle
					margin-left 10px
				.pw
					font-size 13px
					margin-bottom 36px
					overflow hidden
				.forgetpw
					float left
				.changepw
					float right
				.loginbtn
					height 40px
					line-height 40px
					text-align center
					background-color #bcbcbc
					border-radius 5px
					color white
					font-size 18px
					margin-bottom 30px
				.other-login
					font-size 14px
					img
						width 14px
						height 14px
						margin-left 6px
						vertical-align middle
			.wellcome
				float right
				width 320px
				h3
					font-size 24px
					margin-bottom 12px
				p
					font-size 14px
					line-height 24px
				.btn-register
					width 240px
					height 40px
					background-color #6b6b6b
					text-align center
					line-height 40px
					color white
					font-size 18px
					border-radius 5px
					margin-top 28px	
				
</style>
<template>
	<div class="login">
		<div class="logo">LOGO</div>
		<div class="title"><span class="loginlink fl">登录</span><span class="help fr">女王帮助</span></div>
		<div class="loginbox">
			<form>
				<p><input type="text" placeholder="手机号/邮箱/用户名" /></p>
				<p><input type="text" placeholder="密码(6-32个字符)" /></p>
				<p><input type="text" class="iptcode" placeholder="不区分大小写"><span class="code">rt4j</span></p>
				<p class="pw"><span class="forgetpw">忘记密码</span><span class="changepw">修改密码</span></p>
				<div class="loginbtn">登录</div>
				<p class="other-login">使用合作网站账号登录 : <img src="../assets/login/xinl.png" alt=""><img src="../assets/login/weix.png" alt=""><img src="../assets/login/weib.png" alt=""><img src="../assets/login/qq.png" alt=""></p>
			</form>
			<div class="wellcome">
				<h3>欢迎来到女王珠宝！</h3>
				<p>Registering for a free account gives you a number of additional benefits, including access to additional valuable information that you can browse or download, and much more.</p>
				<div class="btn-register">注册</div>
			</div>
		</div>
	</div>
</template>
<script></script>