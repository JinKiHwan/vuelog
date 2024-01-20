import { createWebHistory, createRouter } from 'vue-router';
import PostList from './components/PostList';
import HomeList from './components/HomeList';
import DetailList from './components/DetailList';
import AuthorA from './components/AuthorA';
import CommentB from './components/CommentB';

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
    path: '/detail/:id',
    component: DetailList,
    children: [
      {
        path: 'author',
        component: AuthorA,
      },
      {
        path: 'comment',
        component: CommentB,
      },
    ],
  },
  {
    /* 404 페이지 만들 수 있음 순서는 가장 마지막 */
    path: '/:anything(.*)',
    component: DetailList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
