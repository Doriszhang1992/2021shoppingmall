import Vue from 'vue'
import Router from 'vue-router'

const Home=()=>import('../views/home/Home')
const  Category=()=>import('../views/category/Category')
const Profile=()=>import('../views/profile/Profile')
const ShoppingCart=()=>import('../views/cart/ShoppingCart')
Vue.use(Router)
const routes=[
  {
    path: '',
   redirect:'/home'
  },
 {
  path: '/home',
  name: 'Home',
  component: Home
},
{
  path: '/category',
  name: 'Category',
  component: Category
},
{
  path: '/profile',
  name: 'Profile',
  component: Profile
},
{
  path: '/shoppingcart',
  name: 'ShoppingCart',
  component: ShoppingCart
},
]
const router=new Router({
  routes,
  mode:'history'
})
export default router