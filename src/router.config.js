// 电影组件
import Movie from './views/movie/Movie.vue'
// 图书组件
import Book from './views/book/Book.vue'
// 广播组件
import Broadcast from './views/broadcast/Broadcast.vue'
// 小组组件
import Group from './views/group/Group.vue'
// 详细信息组件
import movieId from './views/movie/movieDetail.vue'

// 导出配置
export default {
    // mode: 'history',//切换路径模式，变成history模式
    scrollBehavior: () => ({y: 0}),// 滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
    routes: [
        {path: '/', component: Movie},
        {path: '/movie/subject/:id', component: movieId},
        {path: '/book', component: Book},
        {path: '/broadcast', component: Broadcast},
        {path: '/group', component: Group},
        {path: '*', redirect: '/'}
    ]
}