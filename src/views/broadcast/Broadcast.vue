<template>
	<div id="broadcast">
		 <VBanner :slogan1='slogan[0]' :slogan2='slogan[1]'></VBanner>

		<div class="bigBox">
			
			<div class="status-login">
                <div class="head-portrait"><img src="https://img1.doubanio.com/icon/user_normal.jpg" alt=""></div>
                <div class="holder">登录发广告</div>
                <div class="icon icon-camera"></div>
                <div class="icon icon-pen"></div>
            </div>
			
			<!-- 评论列表 -->
			<ul class="comment-list">
				<li v-for="item in data">
					<!-- 日期 -->
					<div class="desc">
						<a href="#">
                            <img :src="item.status.author.avatar" alt="">
                        </a>
                        <a href="#">
                            <div class="user-info">
                                <strong>{{item.status.author.name}}
                                    <span>{{item.status.activity}}</span></strong>
                                <div class="timestamp">{{item.status.create_time}}</div>
                            </div>
                        </a>
					</div>
					<!-- end -->
					<!-- 内容 -->
					<div class="feed-card">
						<a href="#">
							<div class="title">
                                {{item.status.title}}
                            </div>
                            <div class="detail">
                                <div class="text">{{item.status.card.subtitle}}</div>
                            </div>
						</a>
					</div>
					<!-- end -->
					<!--赞-->
                    <div class="info">
                        <!--赞-->
                        <div class="ic-btn ic-btn-like  fl">
                            <span class="text">{{item.status.like_count}}</span>
                        </div>
                        <div class="ic-btn ic-btn-comment  fl">
                            <span class="text">{{item.status.comments_count}}</span>
                        </div>
                        <div class="ic-btn ic-btn-retweet fl">
                            <span class="text">{{item.status.resharers_count}}</span>
                        </div>
                        <div class="ic-btn ic-btn-more  fr">

                        </div>
                    </div>
                    <!-- end -->
				</li>
			</ul>
			<!-- end -->
		</div>
	</div>
</template>

<script>
import VBanner from '../common/Banner.vue'
export default {

  name: 'Broadcast',

  data () {
    return {
    	slogan: ['打开App, 回复广播', ''],
    	data: []
    }
  },

  created() {

  },

  components: {
  	VBanner
  },

  mounted(){
	this.getStatus()
  },
  
  methods: {
  	getStatus() {
  		// 获取静态资源文件
  		this.$http.get('status.json').then((res)=> {
            this.data = res.data.items
        }, (err)=> {
            console.log(err)
        })
  	}
  }
}
</script>

<style lang="less" rel="stylesheet/less">
    #broadcast {
        .status-login:after {
            left: 0;
            bottom: 0;
            width: 100%;
            height: 1px;
            background: #E8E8E8;
            -webkit-transform: scaleY(0.5);
            content: '';
            position: absolute;
            -webkit-transform-origin: 0 bottom;
        }
        .status-login {
            position: relative;
            margin: 0 -18px 5px;
            padding: 10px 18px;
            cursor: pointer;
            overflow: hidden;
            .head-portrait {
                width: 40px;
                height: 40px;
                float: left;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .holder {
                color: #aaa;
                padding-left: 10px;
                font-size: 15px;
                line-height: 40px;
                float: left;
            }
            .icon {
                width: 40px;
                height: 40px;
                padding: 8px;
                margin-right: 10px;
                position: relative;
                float: right;
                box-sizing: border-box;
            }
            .icon:before {
                content: '';
                position: absolute;
                width: 24px;
                height: 24px;
                background-size: contain;
                background-position: center;
                background-repeat: no-repeat;
            }
            .icon-camera {
                margin: 0;
            }
            .icon-camera:before {
                background: url("../../assets/img/ic_status_camera.svg");
            }
            .icon-pen:before {
                background: url("../../assets/img/ic_status_pen.svg");
            }

        }
        .comment-list {
            overflow: hidden;
            >a{
                display: block;
                text-align: center;
                padding: 15px 0;
            }
            > li:before {
                left: 0;
                bottom: 0;
                width: 100%;
                height: 1px;
                background: #E8E8E8;
                -webkit-transform: scaleY(0.5);
                content: '';
                position: absolute;
                -webkit-transform-origin: 0 bottom;
                margin-left: 46px;
            }
            > li {
                position: relative;
                padding-bottom: 20px;
                margin-top: 20px;
                margin-bottom: 20px;
                padding-left: 50px;
                /*日期*/
                .desc {
                    display: box;
                    display: flex;
                    font-size: 0;
                    line-height: normal;
                    margin: 0 0 11px;
                    color: #494949;
                    position: relative;
                    align-items: center;
                    margin-left: -46px;
                    img {
                        width: 40px;
                        height: 40px;
                        margin-right: 10px;
                        border-radius: 50%;
                        vertical-align: text-top;
                    }
                    .user-info {
                        flex: auto;
                        strong {
                            font-size: 17px;
                            line-height: 1;
                            color: #494949;
                            display: inline-block;
                            vertical-align: text-top;
                            margin-right: 6px;
                            font-weight: bold;
                            span {
                                color: #aaa;
                                font-weight: normal;
                            }

                        }
                        .timestamp {
                            font-size: 14px;
                            margin-top: 6px;
                            line-height: 1;
                            color: #aaa;
                        }
                    }
                }
                /*内容*/
                .feed-card {
                    padding: 15px;
                    margin: 10px 0 20px;
                    border-radius: 2px;
                    border: solid 1px #d8d8d8;
                    .title {
                        font-size: 17px;
                        font-weight: 500;
                        line-height: 1.4;
                        color: #494949;
                        margin-bottom: 5px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;

                    }
                    .text {
                        font-size: 12px;
                        line-height: 16px;
                        color: #aaa;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        -webkit-line-clamp: 3;
                        -webkit-box-orient: vertical;
                    }
                }
                /*赞*/
                .info {
                    padding-left: 0;
                    margin-top: 13px;
                    margin-right: -20px;
                    overflow: auto;
                    .ic-btn {
                        display: inline-block;
                        margin-right: 20px;
                        font-size: 14px;
                        cursor: pointer;
                    }
                    .ic-btn::before {
                        content: '';
                        width: 20px;
                        height: 20px;
                        background-position: center center;
                        background-repeat: no-repeat;
                        display: inline-block;
                        margin-bottom: -2px;
                    }
                    .text {
                        color: #ccc;
                        margin-left: 3px;
                        position: relative;
                        left: 0;
                        top: -3px;
                    }
                    .ic-btn-like:before {
                        background-image: url("../../assets/img/ic_like_gray.svg");
                    }
                    .ic-btn-comment:before {
                        background-image: url("../../assets/img/ic_comment.svg");
                    }
                    .ic-btn-retweet:before {
                        background-image: url("../../assets/img/ic_retweet_gray.svg");
                    }
                    .ic-btn-more:before {
                        background-image: url("../../assets/img/more.svg");
                    }
                }
            }
        }
    }
</style>