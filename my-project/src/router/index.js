import Vue from 'vue'
import Router from 'vue-router'
import Dept from '../components/new_file.vue'
import Index from '../components/index.vue'
import DeptManager from '../components/DeptManager.vue'
import AddDept from '../components/AddDept.vue'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: '部门管理',
		component: Index,
		redirect:'DeptManager',
		children: [{
				path: '/DeptManager',
				name: '部门查询',
				component: DeptManager
			}, {
				path:'/AddDept',
				name:'添加部门',
				component: AddDept
			}
		]
	}]
})
