import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./../components/Views/Home/Home.vue";
import CreateNewTrip from "./../components/Views/CreateNewTrip/CreateNewTrip.vue";
import GuideDetail from "./../components/Views/GuideDetail/GuideDetail.vue";
import Profile from "../components/Views/Profile/Profile.vue";

const routes = [
	{
		name: "home",
		path: "/",
		component: Home,
	},
	{
		name: "guide-detail",
		path: "/guide-detail/:guideTitle",
		component: GuideDetail,
	},
	{
		name: "create-new-trip",
		path: "/create-new-trip",
		component: CreateNewTrip,
	},
	{
		name: "profile",
		path: "/profile",
		component: Profile,
	},
];

export const router = createRouter({
	history: createWebHashHistory(),
	routes,
	linkExactActiveClass: "active",
});

export default router;
