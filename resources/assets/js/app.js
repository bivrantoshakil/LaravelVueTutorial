
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
import CreateUser from './components/CreateUser.vue';
import DisplayUser from './components/DisplayUser.vue';
import EditUser from './components/EditUser.vue';
import CreateTask from './components/CreateTask.vue';
import DisplayTask from './components/DisplayTask.vue';
import EditTask from './components/EditTask.vue';

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
    path: '/manage/edit/:id',
    component: EditProject
  },
  {
    name: 'CreateUser',
    path: '/user/create',
    component: CreateUser
  },
  {
    name: 'DisplayUser',
    path: '/user',
    component: DisplayUser
  },
  {
    name: 'EditUser',
    path: '/user/edit/:id',
    component: EditUser
  },
  {
    name: 'CreateTask',
    path: '/task/create',
    component: CreateTask
  },
  {
    name: 'DisplayTask',
    path: '/task',
    component: DisplayTask
  },
  {
    name: 'EditTask',
    path: '/task/edit/:id',
    component: EditTask
  }
];

const router = new VueRouter({ mode: 'history', routes: routes});
new Vue(Vue.util.extend({ router }, App)).$mount('#app');