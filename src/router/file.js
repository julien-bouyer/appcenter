const FileList = () => import('@/views/file/FileList.vue');
const FileForm = () => import('@/views/file/FileForm.vue');

const fileRouter = [
  {
    path: 'files',
    name: 'FileList',
    component: FileList,
    meta: {
      requiresAuth: true,
      menu: 'files',
    },
  },
  {
    path: 'file/:id?',
    name: 'FileForm',
    component: FileForm,
    meta: {
      requiresAuth: true,
      menu: 'files',
    },
  },
];

export default fileRouter;
