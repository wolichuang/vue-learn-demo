<template>
	<div id="movies" ref="upDown">
		<div class="content">
			<Vitems :Title="Title[0]" :url='apiUrl+ "in_theaters"'></Vitems>
      <Vitems :Title="Title[1]" :url='apiUrl+ "top250"'></Vitems>
      <Vitems :Title="Title[2]" :url='apiUrl+ "coming_soon"'></Vitems>
		</div>
	</div>
</template>

<script>
import Vitems from './movieItems.vue'

export default {

  name: 'movies',

  data () {
    return {
    	apiUrl: 'api/movie/',
      title: '分类浏览',
      Title: ['影院热映', 'TOP250', '即将上映'],
      msg: ['经典', '冷门佳片', '豆瓣高分', '动作', '喜剧', '爱情', '悬疑', '恐怖', '科幻', '治愈', '文艺', '成长', '动画', '华语', '欧美', '韩国', '日本']
    }
  },

  components: { Vitems }
}
</script>

<style lang="css" scoped>
</style>



