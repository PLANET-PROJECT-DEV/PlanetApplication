import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/Index.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/LoginRegister.vue')
  },
  {
    path: '/application',
    name: 'application',
    component: () => import('../views/Application.vue'),
    children:[
        {
          path:'/application/index',
          name:'applicationIndex',
          component:()=>import('../views/ApplicationIndex.vue')
    },
      {
        path:'/application/message',
        name:'applicationMessage',
        component:()=>import('../views/ApplicationMessage.vue')
      },
      {
        path:'/application/user',
        name:'applicationUser',
        component:()=>import('../views/ApplicationUser.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (localStorage.getItem('USER')) {
      console.log("token存在");
      next();
    } else {
      console.log("token不存在");
      next({
        path: '/login'
      })
    }
  }
  else {
    next();
  }
});
export default router
