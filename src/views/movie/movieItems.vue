<template id="itemsTemplate">
	<!-- 热门电影 -->
	<section class="section-movie">
		  <header>
        <h2>{{this.Title}}</h2>
        <span class="fr cl">更多</span>
      </header>

      <div id="hot" class="movie-list clearfix" ref="moveItem">
         <ul>
           <li v-for="(item, index) in moviesList" :key="index">
              <router-link :to="'/movie/subject/' + item.id">
                  <div class="img"><img :src="item.images.medium" alt=""></div>
                  <div class="title">{{item.title}}</div>
                  <div class="item-rating">
                      <Vstar :score="item.rating.average" v-show="item.rating.average==0? false: true"></Vstar>
                      <span class="grade">{{item.rating.average =='00'?'暂无评分':item.rating.average}}</span>
                  </div>
              </router-link>
           </li>
         </ul>
      </div>
	</section>
	<!-- end -->
</template>

<script>
// 引入beeter scroll
import BScroll from 'better-scroll'
// 打分
import Vstar from '../common/Star.vue'
export default {

  name: 'movieItems',

  // 接收两个参数  1 接收标题 2 接收一个url  接收参数可改可变
  props: ['Title', 'url'],

  data () {
    return {
        apikey: '0b2bdeda43b5688921839c8ecb20399b',
    	  moviesList: []
    }
  },

  created() {
     // 钩子函数 实例被创建 并且拥有属性和方法的时候调用
     let opt = {
         params: {
           'apikey': this.apikey,
           'count': 6,
           'city': '北京',
           'start': 0,
         }
     } 
     this.$http.get(this.url, opt).then((res)=> {
         this.moviesList = res.data.subjects;
         this.$nextTick(() => {
           this.initScroll(); // 滚动
         })
      })
  },

  methods: {
     initScroll() {
       this.movieScroll = new BScroll(this.$refs.moveItem, {
          scrollX: true,
          eventPassthrough: 'vertical',
          click: true
       })
     }
  },

  components: {
    Vstar
  }
}
</script>

<style lang="less" scoped>
.section-movie {
  padding-top: 0.83rem;
  >
  header {
    position: relative;
    padding: 0 1.1rem;

    >
    h2 {
      display: inline-block;
      font-weight: normal;
      min-width: 4em;
      margin-bottom: 0;
      color: #111;
      padding-left: 0;
      padding-bottom: 0;
      font-size: 1.1rem;
    }
    >
    span {
      font-size: 0.9rem;
      text-align: right;
      line-height: 1.1rem;
      position: absolute;
      bottom: 0;
      right: 1.12rem;
    }
  }
}

.movie-list {
  >
  ul {
    width: 675px;
    padding-top: 15px;
    overflow: hidden;
    li:first-child {
      margin-left: 1.12rem;
    }
    li:last-child {
      margin-right: 1.12rem;
    }
  }
  li + li {
    margin-left:0.48rem;
  }

  li {
    > * {
      font-size: 0.94rem;
    }
    float: left;
    vertical-align: top;
    width: 100px;
    text-align: center;
    .title {
      font-size: 1rem;
      margin-top: 0.6rem;
      line-height: 1.1rem;
      max-width:100%;
      overflow:hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
    }
    .img {
      width: 100%;
      height: 8.9rem;
      overflow: hidden;
      > img {
        height: 100%;
        width: 100%;
      }
    }
  }
}
</style>