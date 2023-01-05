import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./../components/Views/Home/Home.vue";

const routes = [
	{
		path: "/",
		component: Home,
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
