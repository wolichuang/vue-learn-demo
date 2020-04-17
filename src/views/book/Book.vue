<template>
	<div id="book">
		<!--轮播图-->
		<VSwipe></VSwipe>
		<!-- end -->
    <!-- 分类 -->
    <div class="types">
        <div class="types-content">
            <!--//接受一个标题-->
            <h3>{{this.title}}</h3>
            <!--接受一个数组-->
            <div class="types-i-content">
                <ul>
                    <li v-for="(item,i) in msg" :key="i">
                        <router-link to="/" class="types-a">
                            <el-button type="success" plain class="half">
                                {{item}}
                                <span class="half-r">></span>
                            </el-button>
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- end -->
	</div>
</template>

<script>
import VSwipe from '../common/VSwipe.vue'
export default {

  name: 'Book',

  data() {
    return {
        Title: ['最受关注图书 | 虚构类', '最受关注图书 | 非虚构类', '豆瓣纸书'],
        title: '分类浏览',
        msg: ['小说', '爱情', '历史', '外国文学', '青春', '励志', '随笔', '传记', '推理', '旅行', '奇幻', '经管']
    }
  },

  components: { VSwipe }
}
</script>

<style lang="less" rel="stylesheet/less" >

    .types {
        padding-top: 1.3rem;
        h3 {
            padding: 0 1.12rem;
        }
        .half {
            text-align: left;
            box-sizing: border-box;
            margin-bottom:20px;
            .half-r {
                float: right;
                width: 3%;
                font-weight: normal;
                font-family: Consolas;
                color: #ccc;
            }
        }
        .types-content {
            .types-a {
                display: block;
            }
            .types-i-content {
                margin-left: 0.94rem;
                > ul {
                    width: 100%;
                    padding: 1.12rem 0 1.88rem;
                    color: #eee;
                    font-size: .9rem;
                    overflow: hidden;
                    > li {
                        width: 49%;
                        display: inline-block;
                        margin-right: 1%;
                    }
                }
            }
        }
    }
</style>