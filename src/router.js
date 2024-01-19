import { createWebHistory, createRouter } from 'vue-router';
import PostList from './components/PostList';
import HomeList from './components/HomeList';
import DetailList from './components/DetailList';

const routes = [
  {
    path: '/list',
    component: PostList,
  },
  {
    path: '/',
    component: HomeList,
  },
  {
    path: '/detail',
    component: DetailList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
