const UserList = () => import('@/views/user/UserList.vue');
const UserForm = () => import('@/views/user/UserForm.vue');

const userRouter = [
  {
    path: 'users',
    name: 'UserList',
    component: UserList,
    meta: {
      requiresAuth: true,
      menu: 'users',
    },
  },
  {
    path: 'user/:id?',
    name: 'UserForm',
    component: UserForm,
    meta: {
      requiresAuth: true,
      menu: 'users',
    },
  },
];

export default userRouter;
