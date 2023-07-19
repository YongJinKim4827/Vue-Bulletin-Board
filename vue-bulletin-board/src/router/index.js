import HomeView from '@/views/Home.vue';
import AboutView from '@/views/About.vue';
import { createRouter, createWebHistory } from 'vue-router';
import PostCreateView from '@/posts/PostCreateView.vue';
import PostDetailView from '@/posts/PostDetailView.vue';
import PostEditView from '@/posts/PostEditView.vue';
import PostListView from '@/posts/PostListView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import NestedView from '@/views/nested/NestedView.vue';
import NestedOneView from '@/views/nested/NestedOneView.vue';
import NestedTwoView from '@/views/nested/NestedTwoView.vue';
import NestedHomeView from '@/views/nested/NestedHomeView.vue';

const routes = [
	{
		path: '/',
		name: 'Home', //라우트의 이름 지정 가능
		component: HomeView,
	},
	{
		path: '/about',
		name: 'About', //라우트의 이름 지정 가능
		component: AboutView,
	},
	//Posts
	{
		path: '/posts',
		name: 'PostList',
		component: PostListView,
	},
	{
		path: '/posts/create',
		name: 'PostCreate',
		component: PostCreateView,
	},
	{
		path: '/posts/:id',
		name: 'PostDetail',
		component: PostDetailView,
	},
	{
		path: '/posts/:id/update',
		name: 'PostEdit',
		component: PostEditView,
	},
	{
		path: '/nested',
		name: 'Nested',
		component: NestedView,
		children: [
			//중첩라우트 설정
			{
				path: '', // Home 화면
				name: 'NestedHome',
				component: NestedHomeView,
			},
			{
				path: 'one', // '/'를 넣으면 안됨, 넣게되면 "localhost:8080/one"으로 인식함
				name: 'NestedOne',
				component: NestedOneView,
			},
			{
				path: 'two',
				name: 'NestedTwo',
				component: NestedTwoView,
			},
		],
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'NotFound',
		component: NotFoundView,
	},
];

const router = createRouter({
	history: createWebHistory('/'),
	routes,
});

export default router;
