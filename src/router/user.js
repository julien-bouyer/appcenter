const UserList = () => import('@/views/user/UserList.vue');

const userRouter = [
  {
    path: 'users',
    name: 'UserList',
    component: UserList,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: 'register',
    name: 'register',
    component: () => import('@/views/user/Register.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

export default userRouter;
