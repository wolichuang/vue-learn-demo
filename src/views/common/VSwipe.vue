<template id="swipeBanner">
	<!-- 轮播组件 -->
	<div class="section-content clearfix">
		<div class="page-swipe">
			 <el-carousel indicator-position="outside">
			 	<el-carousel-item class="swipe-a" href="#">
                    <img class="cover" src="../../assets/img/1384.jpg"
                         alt="">
                    <div class="content">
                        <div>
                            <span>￥{{data.data.price}}</span>
                            <p>{{data.data.title}}</p>
                        </div>
                        <p>不可思议的友谊奇迹，人生路上柔软的智慧之光</p>
                    </div>
                </el-carousel-item>

                <el-carousel-item class="swipe-a" href="#">
                    <img class="cover" src="../../assets/img/1324.jpg"
	                     alt="">
	                <div class="content">
	                    <div>
	                        <span>￥{{data.data2.price}}</span>
	                        <p>{{data.data2.title}}</p>
	                    </div>
	                    <p>帕蒂·史密斯《只是孩子》姊妹篇，如何面对人生的不断失去...</p>
	                </div>
                </el-carousel-item>

                <el-carousel-item class="swipe-a" href="#">
                    <img class="cover" src="../../assets/img/898.jpg"
	                     alt="">
	                <div class="content">
	                    <div>
	                        <span>￥{{data.data3.price}}</span>
	                        <p>{{data.data3.title}}</p>
	                    </div>
	                    <p>摄影教父阮义忠的少年画家梦，海外艺术家的海上访问记</p>
	                </div>
                </el-carousel-item>
			 </el-carousel>
		</div>
	</div>
	<!-- end -->
</template>

<script>
export default {

  name: 'VSwipe',

  data () {
    return {
    	data: {'data': [], 'data2': [], 'data3': []},
    	url: '/api/book/'
    }
  },

  methods: {},

  created() {
  	 let _this = this;
  	 let options = {
  	 	params: {
  	 		'apikey': '0b2bdeda43b5688921839c8ecb20399b'
  	 	}
  	 }

  	 _this.$http.get(_this.url + '26948733',options).then((res)=> {
           _this.data.data = res.data
     });
     _this.$http.get(_this.url + '26939261',options).then((res)=> {
           _this.data.data2 = res.data
     });
     _this.$http.get(_this.url + '26845771',options).then((res)=> {
           _this.data.data3 = res.data
     });
  }
}
</script>

<style lang="less" rel="stylesheet/less">
    /*轮播图*/
    .page-swipe {
      	padding: 0 30px;
    }
    .swipe-a {
        display: block;
        overflow: hidden;
        margin: 15px 1.12rem 0px;
        background: #f7f7f7;

        .cover {
            float: left;
            width: 100px;
            margin-right: 15px;
            margin-top:70px;
        }
        .content {
             margin-top:80px;
            > div {
                span {
                    float: right;
                    color: #E76648;
                    font-size: 16px;
                    margin-right:50px;
                    line-height: 22px
                }
                p {
                    font-size: 19px;
                    color: #494949;
                    margin-right: 40px;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    word-wrap: normal;
                }
            }
            > p {
                display: -webkit-box;
                overflow: hidden;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 4;
                font-size: 13px;
                font-weight: 300;
                line-height: 1.5;
                color: #9B9B9B;
            }
        }
    }

</style>
