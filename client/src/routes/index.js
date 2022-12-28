import Start from '@/components/HelloWorld'
import Posts from '@/components/pages/PostsPage'

const routes = [
  {
    path: '/',
    name: 'Start',
    component: Start
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  }
]
export default routes
