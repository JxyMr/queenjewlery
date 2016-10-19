<style scoped lang="stylus">
	.meter
		position relative
		overflow hidden
		&.step1
			.progress
				border-right-width 705px
				border-left-width 475px
		&.step2
			.progress
				border-right-width 471px
				border-left-width 709px
		&.step3
			.progress
				border-right-width 0
				border-left-width 1180px
		.progress
			position absolute
			top 89px
			height 2px
			border-style none solid
			border-right-color rgb(188, 188, 188)
			border-left-color black
		.circle
			position relative
			float left
			margin-top 70px
			width 36px
			height @width
			border-width 2px
			border-style solid
			border-radius 50%
			text-align center
			line-height @height
			z-index 1
			background-color white
			border-color rgb(188, 188, 188)
			&.done
				background-color black
				border-color @background-color
				color white
			&:before
				position absolute
				top -44px
				left ((@width + @border-width * 2) / 2)
				font-size 15px
				white-space nowrap
				color black
				transform translateX(-50%)
			&:nth-of-type(1)
				margin-left 338px
				&:before
					content "描述您的需求"
			&:nth-of-type(2)
				margin-left 194px
				&:before
					content "预览您的需求"
			&:nth-of-type(3)
				margin-left 194px
				&:before
					content "发送需求成功"
	form
		margin-top 30px
		padding 26px
		width 846px
		border 1px solid rgb(242, 242, 242)
		float left
		label
			font-size 14px
			&:not([for="sltType"])
				display block
		select
			height 25px
		>div
			&:not(:first-of-type)
				margin-top 30px
			&.upload
				margin-top 20px	
		.ipt-txt
			margin-top 18px
			height 28px
			border 1px solid rgb(169, 169, 169)
			&#iptReq
				width 651px
			&:not(#iptReq)
				width 208px
		.code
			width 130px
			height 30px
			background-color rgb(242, 242, 242)
			border 1px solid rgb(228, 228, 228)
			cursor pointer
		textarea
			margin-top 18px
			width 653px
			height 183px
		.upload
			overflow hidden	
			.image
				width 98px
				height 28px
				background-color rgb(242, 242, 242)
				
				float left
				border 1px solid rgb(228, 228, 228)
				border-radius 2px
				text-align center
				line-height 28px
				position relative
				[type="file"]
					width @width
					height @height
					opacity 0
					/*&::-webkit-file-upload-button
						display none*/
					position absolute
					top 0
					left 0		
			p
				float left
				margin-left 10px
				font-size 14px
				overflow hidden
				line-height 25px
				position relative
				.issue
					font-weight 700
					margin-left 30px
			.img-show
				width 100px
				height 100px
				background-repeat no-repeat
				background-position 50% 50%
				background-size contain
				background-color rgb(242, 242, 242)			
					
		.next
			margin-top 18px
			width 100px
			height 30px
			background-color rgb(134, 134, 134)
			border-style none
			border-radius 2px
			color white
			cursor pointer
	.info
		padding 26px 26px 80px
		margin-top 30px
		width 228px
		background-color #f2f2f2
		font-size 14px
		.info-com
			border-bottom 1px dashed #d7d7d7
			.info-tit
				margin-bottom 24px
				font-size 16px
			p
				line-height 20px
					
		.safe
			padding-bottom:44px
			margin-top 14px
		.contact
			padding-bottom 54px
			padding-top 40px
			.phone
				font-weight 400
				font-size 20px
				line-height 30px
				margin 15px 0
		.webcode
			margin-top 40px
			width 180px
			height @width
			img
				width 100%		
							
</style>
<template>
	<div class="apply w1180">
		<div class="meter step1">
			<div class="circle done">1</div>
			<div class="circle">2</div>
			<div class="circle">3</div>
			<div class="progress"></div>
		</div>
		<form>
			<div>
				<label for="sltType">选择类目：</label>
				<select id="sltType" v-model="type">
					<option v-for="item of arrTypes" :value="item.value" v-text="item.name"></option>
				</select>
			</div>
			<div>
				<label for="iptReq">简单描述您的需求:</label>
				<input class="ipt-txt" id="iptReq" v-model="req" @input="handleValidate('req', $event)" />
			</div>
			<div>
				<label>留下您的联系方式，方便交易顾问联系您：</label>
				<input class="ipt-txt" placeholder="请输入手机号码" v-model="tel" @input="handleValidate('tel', $event)" />
				<input class="code" type="button" value="获取手机验证码" />
				<br />
				<input class="ipt-txt" placeholder="请输入手机验证码" v-model="code" @input="handleValidate('code', $event)" />
			</div>
			<div>
				<label for="">说说您的具体要求：</label>
				<textarea v-model="detail" @input="handleValidate('detail', $event)"></textarea>
			</div>
			<div class="upload">
				<div class="image">
					添加附件
					<input type="file" @change="handleChange"/>
				</div>
				<p>
					
					<span v-text="message"></span>
					<a class="issue">上传遇到问题？</a>
				</p>
				<p class="img-show" :style="{'background-image':'url('+path+')'}"></p>
			</div>
			<input class="next" type="button" value="下一步>" @click="handleNext" />
		</form>
		<div class="info fr">
			<div class="info-com safe">
				<p class="info-tit">保障交易安全</p>
				<p>个人资料绝不泄露</p>
				<p>交易问题一律赔偿</p>
				<p>不收取任何费用</p>
			</div>
			<div class="info-com contact">
				<p class="info-tit">联系客服帮您发需求</p>
				<p>客服电话</p>
				<p class="phone">12345678912</p>
				<p>（周一至周日，9:00-21:00）</p>
			</div>
			<div class="webcode"><img src="../assets/weixin.png" alt=""></div>
		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
				arrTypes : [
					{
						name : "首发申请",
						value : "001"
					},
					{
						name : "创意申请",
						value : "005"
					},
					{
						name : "定制申请",
						value : "002"
					}
				],
				type : "001",
				req : "",
				tel : "",
				code : "",
				detail : "",
				path : "",
				message : "最多可添加5个附件，每个大小不超过2M"
			};
		},
		methods : {
			handleChange(e){
				const fileReader = new FileReader(),
					FILES = e.target.files;
				fileReader.onload = e => {
					this.path = e.target.result;
				};
				FILES.length && /jpe?g|png|gif|bmp/.test(FILES[0].type) && fileReader.readAsDataURL(FILES[0]);
			},
			handleNext(){
				console.log();
			},
			handleValidate(type, e){
				const value = this[type];
				this.message = (/<script>/.test(value) || !({
					tel : /^1[3578]\d{9}$/,
					code : /^\d{6}$/
				}[type] || /.*/).test(value)) ? "您的输入有误" : "";
			}
		}
	};
</script>