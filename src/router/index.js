import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function lazyLoad(view){
  return() => import(`../docs/categories/${view}Page.vue`)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: lazyLoad('Home')
    },
    {
      path: '/about',
      name: 'About',
      component: lazyLoad('About')
    },
    {
      path: '/work',
      name: 'Work',
      component: lazyLoad('Work')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: lazyLoad('Contact')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: lazyLoad('Blog')
    }
  ]
});
