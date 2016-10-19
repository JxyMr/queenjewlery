import Vue from "vue";
import Router from "vue-router";
import Apply from "./pages/Apply";
import Home from "./pages/Home";
import BrandNew from "./pages/BrandNew"; 
import Brand from "./pages/Brand";
import Activity from "./pages/Activity";
import Me from "./pages/Me";  
import App from "./App";
Vue.use(Router);
new Vue({
	el : "#app",
	router : new Router({
		mode : "history",//确保服务器端开放页面路径访问权限
		routes:[
			{
				path : "/apply",
				component : Apply
			},
			{
				path : "/home",
				component : Home
			},
			{
				path:"/brandNew",
				component : BrandNew
			},
			{
				path:"/brand",
				component : Brand
			},
			{
				path:"/activity",
				component : Activity
			},
			{
				path:"/me",
				component : Me
			}
		]
	}),
	render : h => h(App)
});