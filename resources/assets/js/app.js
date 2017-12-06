
import Vue from 'vue';

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import VueAxios from 'vue-axios';
import axios from 'axios';
Vue.use(VueAxios, axios);

import App from './App.vue';
import CreateProject from './components/CreateProject.vue';
import DisplayProject from './components/DisplayProject.vue';
import EditProject from './components/EditProject.vue';

const routes = [
  {
    name: 'CreateProject',
    path: '/manage/create',
    component: CreateProject
  },
  {
        name: 'DisplayProject',
        path: '/',
        component: DisplayProject
  },
  {
      name: 'EditProject',
      path: '/edit/:id',
      component: EditProject
   }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');