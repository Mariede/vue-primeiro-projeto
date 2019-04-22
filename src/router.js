import Vue from 'vue'
import Router from 'vue-router'
import Home1 from './views/Home1.vue'
import Home2 from './views/Home2.vue'
import Home3 from './views/Home3.vue'
import Home4 from './views/Home4.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home1',
			component: Home1
		},
		{
			path: '/home2',
			name: 'home2',
			component: Home2
		},
		{
			path: '/home3',
			name: 'home3',
			component: Home3
		},
		{
			path: '/home4',
			name: 'home4',
			component: Home4
		}
	]
})
