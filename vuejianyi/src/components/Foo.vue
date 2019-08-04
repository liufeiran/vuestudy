<template>
	<div>
		Foo
		<button @click="clickMe">点击</button>
	</div>
</template>
<script type="text/javascript">
export default{
	data(){
		return{}
	},
	created(){
		
	},
	methods:{
		clickMe(){
			alert("点击")
		}
	},
	computed:{},
	components:{}
}
</script>
<style scoped>

</style>