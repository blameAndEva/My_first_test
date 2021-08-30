<template>
	<div>
		<el-table :data="tableData" border style="width: 100%">
			<el-table-column fixed prop="deptno" label="部门编号" width="150">
			</el-table-column>
			<el-table-column prop="dname" label="部门名称" width="120">
				<template slot-scope="scope">
					<el-tag>{{scope.row.dname}}</el-tag>
				</template>
			</el-table-column>
			<el-table-column prop="loc" label="部门地址" width="120">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button @click="edit(scope.row)" type="text" size="small">修改</el-button>
					<el-button @click="deletel(scope.row)" type="text" size="small">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
		<el-pagination background layout="prev, pager, next" :total="total " :page-size="page_size"
			@current-change="page">
		</el-pagination>
	</div>
</template>

<script>
	export default {
		name: "DeptManager",
		methods: {
			page: function(currentPage) {
				this.$http.get("/dept/findAll/" + (currentPage - 1) + "/6").then(resp => {
					console.log(resp);
					this.tableData = resp.data.content;
					this.page_size = resp.data.size;
					this.total = resp.data.totalElements;
				})
			},
			edit(row) {
				console.log("编辑" + row);
			},
			deletel(row) {
				console.log("删除" + row);
			}
		},

		data() {
			return {
				page_size: 0,
				total: 0,
				tableData: [{
					deptno: '1',
					dname: '王小虎',
					loc: '上海',
				}, {
					deptno: '2',
					dname: '王小虎',
					loc: '上海',
				}]
			}
		},
		created: function() {
			this.$http.get("/dept/findAll/" + "0" + "/6").then(resp => {

				console.log(resp);

				this.tableData = resp.data.content;
				3

				this.page_size = resp.data.size;

				this.total = resp.data.totalElements;
			});
		},
	}
</script>
