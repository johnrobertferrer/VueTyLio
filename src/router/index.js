import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

function lazyLoad(view){
  return() => import(`../docs/categories/${view}`)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: lazyLoad('HomePage.vue')
    },
    {
      path: '/about',
      name: 'About',
      component: lazyLoad('AboutPage.vue')
    },
    {
      path: '/work',
      name: 'Work',
      component: lazyLoad('WorkPage.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: lazyLoad('ContactPage')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: lazyLoad('BlogPage')
    }
  ]
});
