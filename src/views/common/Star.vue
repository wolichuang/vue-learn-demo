<template>
<div class="star">
	<span v-for="iClass in hasClass" class="star-i" :class="iClass"></span>
</div>
</template>

<script>
//星星个数
const size = 5;
//全星
const cl_on = 'on';
//半星
const cl_off = 'off';
export default {

  name: 'Star',

  props: ['score'],  //接收一个评分参数

  data () {
    return {

    }
  },

  computed: {
	hasClass() {
		//定义一个数组 存储class
        //得到分数 如果是 6.1分 去除小数 / 3 分 3星  如果是 7.1分 去除小数 /2等于3.5 向上取整 是4星
		let result = [];
		let score = Math.ceil(Number(this.score) / 2);
		for (var i = 0; i < score; i++) {
			result.push(cl_on);
		};
		while (result.length < size) {
			result.push(cl_off);
		}
		return result;
	}
  }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>

.star {
	display: inline-block;

	.on {
		background-image: url('../../assets/img/on.png');
	}

	.off {
        background-image: url('../../assets/img/off.png');
    }

    .star-i {
        width: 10px;
        height: 10px;
        float: left;
        margin-right: 1px;
        background-size: cover;
        max-width: 20px;
        max-height: 20px;
        background-repeat: no-repeat;
    }

}
</style>