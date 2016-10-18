<template>
	<p>{{ num }}<hello></hello></p>
		
</template>
<script>
	import hello from "./Hello"
	export default{
		data (){
			return{
				num : 123
			}
		},
		components : {
			hello
		}
	}

</script>