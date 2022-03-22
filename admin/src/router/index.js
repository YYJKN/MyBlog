import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const main = () => import('views/main/main');
const create = () => import('views/articles/create');
const list = () => import('views/articles/list');

const routes= [
  {path: '/', redirect: '/main'},
  {path: '/main', 
  component: main,
  children: [
    {path: '/', redirect:'/list'},
    {path: '/create', component: create},
    {path: '/edit/:id', name: 'edit',component: create},
    {path: '/list', component: list}
  ]
}
];

export default new Router({
  routes,
})