<style scoped lang="stylus">
	.register
		width 1000px
		margin 0 auto
		.logobar
			overflow hidden
			padding-bottom 22px
			padding-top 28px
			border-bottom 1px solid #bcbcbc
			.logo
				font-size 48px
				font-weight 700
			.help
				font-size 14px
				margin-top 30px
		.title
			margin-top 24px
			.loginlink
				font-size 32px
				font-weight 700
		.image
			float left
			width 580px
			height 420px
			margin-top 40px
		.form
			float left
			margin-left 20px
			width 398px
			height 458px
			border 1px solid #bababa
			.tab
				a
					display inline-block
					height 38px
					line-height 38px
					text-align center
					font-size 13px
					width 198px
					border-bottom 1px solid #bcbcbc
					&.tab-tel
						border-right 1px solid #bcbcbc
					&.tab-email
						border-left 1px solid #bcbcbc
			.way
				padding 50px
				&.byTel
					display none
				p
					margin-top 30px									
</style>
<template>
	<div class="register">
		<div class="logobar">
			<span class="logo fl">LOGO</span>
			<span class="help fr">女王帮助</span>
		</div>
		<div class="main">
			<div class="title">
				<span class="loginlink">注册</span>
				<span>建立一个新账号</span>
			</div>
			<div class="image"><img src="../assets/u63.jpg" alt="" /></div>
			<div class="form">
				<div class="tab">
					<a href="#" class="tab-tel">手机号码注册</a><a href="#" class="tab-email">电子邮箱注册</a>
				</div>
				<div class="byTel way">
					<form>
						<p>
							<label>手机号码</label>
							<select>
								<option>中国(+86)</option>
								<option>美国(+00)</option>
							</select>
							<input type="text" value="输入手机号码" />	
						</p>
						<p><label>验证码<input type="text" /></label><span>获取短信验证码</span></p>
						<p><label>密码<input type="text" value="6-32个字符"></label></p> 
						<p><label>确认密码<input type="text" value="请重复输入您的密码"></label></p>
						<p><label><input type="radio">同意《女王珠宝账号服务条款，隐私政策》</label></p>
						<p><input type="button" value="注册" /></p>
					</form>
				</div>
				<div class="byEmail way">
					<form>
						<p><label>邮箱<input type="text" value="请输入邮箱号码" /></label></p>
						<p><label>密码<input type="text" value="6-32个字符" /></label></p>
						<p><label>确认密码<input type="text" value="请重复输入您的号码"></label></p>
						<p><label>验证码<input type="text" value="不区分大小写"><span>rt4j</span></label></p>
						<p><label><input type="radio">同意《女王珠宝账号服务条款，隐私政策》</label></p>
						<p><input type="button" value="注册" /></p>
					</form>
				</div>
			</div>
		</div>
	</div>
</template>
<script></script>