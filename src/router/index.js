import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../docs/categories/HomePage';
import AboutPage from '../docs/categories/AboutPage.vue';
import WorkPage from '../docs/categories/WorkPage';
import ContactPage from '../docs/categories/ContactPage';
import BlogPage from '../docs/categories/BlogPage';

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
      component: AboutPage
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkPage
    },
    {
      path: '/contact',
      name: 'Contact',
      component: ContactPage
    },
    {
      path: '/blog',
      name: 'Blog',
      component: BlogPage
    }
  ]
});
