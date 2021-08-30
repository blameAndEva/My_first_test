<template>
	<table>
		<tr>
			<td>编号</td>
			<td>部门名称</td>
			<td>地址</td>
		</tr>
		<tr v-for="item in depts">
			<td>{{item.deptno}}</td>
			<td>{{item.dname}}</td>
			<td>{{item.loc}}</td>
		</tr>
	</table>
</template>

<script>
	export default {
		name: "Dept",
		data: function() {
			return {
				depts: []
			}
		},
		created:function(){
			this.$http.get('/dept/findAll').then(resp=>{
				this.depts=resp.data;
			})
			
		}
	}
</script>

<style>
</style>
