<!--电影详细-->
<template>
    <div class="movieDetails">
       <div class="bigBox">
           <h1>{{data.title}}</h1>
           <!-- 图像 -->
           <div class="subject-info clearfix">
               <div class="contentL">
                   <p class="comment">
                       <!-- 星星 -->
                       <Vstar class="size" :score="star"></Vstar>
                       <strong class="grade">{{star == '0' ? '尚未上映' : star}}</strong>
                       <!-- 评价 -->
                       <span>{{data.ratings_count}} 人</span>
                   </p>
                   <!-- 标签 -->
                   <p>
                       <span v-for="item in data.countries">{{item}}</span>
                       <span v-for="(item,index) in data.casts">{{item.name}} 
                       {{index+1 == data.casts.length ? '' : 
                       '/'}} </span>
                   </p>
               </div>

               <div class="img fr">
                    <a href="#"><img :src="datai" alt="data.title"></a>
                </div>
           </div>
           <!-- end -->
            <!-- 简介 -->
            <div class="subject-summary">
                <h2>{{data.title}}的剧情简介</h2>
                <div>
                    <p>
                        {{data.summary}}
                    </p>
                </div>
            </div>
            <!-- end -->
       </div>
    </div>
</template>
<script>
    import Vstar from '../common/Star.vue'
    export default{
        data(){
            return {
                url: '/api/movie/subject/',
                data: {},
                slogan: ['用 App 打开', '查看影片获奖情况'],
                datai: '',
                star: '',
                apikey: '0b2bdeda43b5688921839c8ecb20399b'
            }
        },
        created(){
            let _this = this;
            let id = _this.$route.params.id;
            let ajaxUrl = _this.url + id;
            // 请求 get
            _this.$http.get(ajaxUrl, {
                 params: {
                  apikey: _this.apikey
                }
            }).then((res)=> {
                console.log(res.data);
                this.data = res.data
                this.datai = res.data.images.medium
                this.star = res.data.rating.average
            }, (err)=> {
                console.log(err)
            })

        },
        components: {
            Vstar
        }

    }
</script>
<style rel="stylesheet/less" lang="less">

    .bigBox {
        > * {
            padding: 0;
            margin: 0;
        }
        margin: 0 18px;
        p {
            font-size: 15px;
        }
        h1 {
            margin: 30px 0 5px;
            font-size: 24px;
            line-height: 32px;
            word-break: break-all
        }
        .subject-info {
            position: relative;
            margin-bottom: 30px;
            display: flex;
            .conentL {

                flex: 1;
                .comment {
                    line-height: 18px;
                    span:last-child {
                        color: #aaa;
                    }
                    strong {
                        font-weight: normal;
                        color: #494949;
                        padding-right: 8px;
                    }
                    .size {
                        width: auto;
                        > span {
                            width: 13px;
                            height: 13px;

                        }

                    }

                }
                p:last-child {
                    color: #494949;
                    margin-top: 15px;
                    padding-right: 24px;
                    font-size: 14px;
                    line-height: 1.6;
                    a {
                        display: block;
                        font-size: 14px;
                        line-height: 1;
                        margin-top: 10px;
                        margin-bottom: -30px;
                    }
                }
            }

            .img {
                max-width: 100%;
            }
        }
        .subject-summary {

            h2 {
                color: #aaa;
                margin: 0 0 15px;
                font-size: 15px;
            }
            p {
                font-size: 15px;
                line-height: 22px;
                word-wrap: break-word;
            }

        }

    }
</style>

