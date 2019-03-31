import Home from './../views/Home.vue'
import Son1 from './../views/son_1.vue'
import Son2 from './../views/son_2.vue'
export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './../views/About.vue')
  },
  {
    path: '/parent',
    name: 'parent',
    children: [
      {
        // 当 /user/:id/profile 匹配成功，
        // UserProfile 会被渲染在 User 的 <router-view> 中
        name:'son_1',
        path: 'son_1',
        component: Son1
      },
      {
        // 当 /user/:id/posts 匹配成功
        // UserPosts 会被渲染在 User 的 <router-view> 中
        name:'son_2',
        path: 'son_2',
        component: Son2
      }
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './../views/Parent.vue')
  }
]
