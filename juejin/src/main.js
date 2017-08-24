// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import axios from 'axios'
import qs from 'qs'


Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		modal: false,
		regInput: false,
		isLogin: false,
		ifError: false,
		allData: [],
		androidData: [],
		frontendData: [],
		userData: {},
		rout: [
			{url: "/", title: "首页"},
	        {url: "/zhuanlan", title: "专栏"},
	        {url: "/collections/recommended", title: "收藏集"},
	        {url: "/explore/all", title: "发现"},
	        {url: "/subscribe/all", title: "标签"}
		],
		tag: [
			{url: '/all', tx: '全部'},
	        {url: '/android', tx: 'Android'},
	        {url: '/frontend', tx: '前端'},
	        {url: '/ios', tx: 'iOS'},
	        {url: '/backend', tx: '后端'},
	        {url: '/design', tx: '设计'},
	        {url: '/product', tx: '产品'},
	        {url: '/freebie', tx: '工具资源'},
	        {url: '/article', tx: '阅读'},
	        {url: '/ai', tx: '人工智能'}
		],
		collectionTag: [
			{url: '/recommended', tx: '编辑推荐'},
        	{url: '/all', tx: '全部'}
		],
		attentionTag: [
			{url: '', tx: '我的关注'}
		],
		collData: [],
		personCollData: [],
		errorMessage: ''
	},
	mutations: {
		OPEN_MODAL(state, str) {
			if (str === 'logi') {
				state.regInput = false;
			} else if (str === 'reg') {
				state.regInput = true;
			}
			state.modal = true;
		},
		CLOSE_MODAL(state) {
			state.modal = false;
		},
		CHANGE_BOX(state) {
			state.regInput = !state.regInput;
		},
		LOGIN_DATA(state, obj) {
			axios.post('http://127.0.0.1:3210/getUser', qs.stringify(obj))
				.then((res) => {
					if(res.data.success){
						console.log('登陆');
						state.isLogin = true;
						state.modal = false;
						state.userData = res.data.results[0];
						state.rout[0].url = '/timeline';
						state.rout.pop();
						
						if(router.currentRoute.path=='/'){
							router.push({path: '/timeline'});
						}
						let perID={id: state.userData.id};
						axios.post('http://127.0.0.1:3210/user/getColle', qs.stringify(perID))
							.then((res) => {
								state.personCollData = res.data;
							}).catch((err) => {
								console.log(err);
							});
						localStorage.user = state.userData.email;
						localStorage.paw = state.userData.password;
					}else{
						state.ifError = true;
						state.errorMessage = '账号或密码错误，请重试';
						setTimeout(function (){
							state.ifError = false;
						},5000);
					}
				}).catch(function(err) {
					console.log(err);
				})
		},
		LOGOUT_COUNT(state) {
			state.isLogin = false;
			state.rout[0].url = '/';
			state.rout.push({url: "/subscribe/all", title: "标签"});
			router.push({path: '/'});
			delete localStorage.user;
			delete localStorage.paw;
		},
		ALL_ARTICLE(state, obj) {
			state.allData = obj;
			state.androidData = obj.filter(function (x) {
				return x.type == 'android';
			});
			state.frontendData = obj.filter(function (x) {
				return x.type == 'frontend';
			});
		},
		MORE_DATA(state, obj) {
			obj.forEach((ele) => {
				state.collData.push(ele);
			});
		},
		REG_DATA(state, obj) {
			axios.post('http://127.0.0.1:3210/reg', qs.stringify(obj))
				.then((res) => {
					console.log(res);
					if(res.data){
						state.regInput = false;
					}else{
						state.ifError = true;
						state.errorMessage = '邮箱或电话已注册，请登陆';
						setTimeout(function (){
							state.ifError = false;
						},5000);
					}
				}).catch(function(err) {
					console.log(err);
				})
		},
		ALL_COLLECTIONS(state, obj) {
			state.collData = obj;
		},
		ADD_FOLLOW(state, obj) {
			if(state.isLogin){
				let object={fi:obj.id, ui:state.userData.id};
				axios.post('http://127.0.0.1:3210/follow/add', qs.stringify(object))
					.then((res) => {
						console.log('添加收藏成功');
						state.personCollData.push(obj);
					}).catch(function(err) {
						console.log(err);
					})
			}else{
				state.modal = true;
			}
			
		},
		DEL_FOLLOW(state, obj) {
			let i=state.personCollData.indexOf(obj);
			let object={fi:obj.id, ui:state.userData.id};
			axios.post('http://127.0.0.1:3210/follow/del', qs.stringify(object))
				.then((res) => {
					console.log('删除收藏成功');
					state.personCollData.splice(i,1);
				}).catch(function(err) {
					console.log(err);
				})
		}
	},
	actions: {
		openModal({commit}, str) {
			commit('OPEN_MODAL', str);
		},
		closeModal({commit}) {
			commit('CLOSE_MODAL');
		},
		changeBox({commit}) {
			commit('CHANGE_BOX');
		},
		loginData({commit}, obj) {
			commit('LOGIN_DATA', obj);
		},
		logoutCount({commit}) {
			commit('LOGOUT_COUNT');
		},
		allArticle({commit}, obj) {
			commit('ALL_ARTICLE', obj);
		},
		moreData({commit}, obj) {
			commit('MORE_DATA', obj);
		},
		regData({commit}, obj) {
			commit('REG_DATA', obj);
		},
		allCollections({commit}, obj) {
			commit('ALL_COLLECTIONS', obj);
		},
		addFollow({commit}, obj) {
			commit('ADD_FOLLOW', obj);
		},
		delFollow({commit}, obj) {
			commit('DEL_FOLLOW', obj);
		}
	}
})

Vue.config.productionTip = false;
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: {
		App
	}
})