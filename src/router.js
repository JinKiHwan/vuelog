import { createWebHistory, createRouter } from 'vue-router';
import PostList from './components/PostList';
import HomeList from './components/HomeList';

const routes = [
  {
    path: '/list',
    component: PostList,
  },
  {
    path: '/',
    component: HomeList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
