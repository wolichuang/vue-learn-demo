<template>
  <div>
    <h1>获取数据</h1>
    <ul v-for="item in usersList"
        :key="item.id">
      <li>{{ item.id }}</li>
      <li>{{ item.professionId }}</li>
      <li>{{ item.job }}</li>
    </ul>
  </div>
</template>

<script>
import { userApi } from '../api/user'
export default {
  name: 'ajaxUsers',
  data () {
    return {
      usersList: []
    }
  },
  methods: {
    initUser () {
      const vm = this
      userApi({ name: 'wxh', age: '35' }).then(res => {
        const result = res.data
        if (result.status === 200) {
          vm.usersList = result.data
        } else {
          console.log(result.message)
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  created () {
    this.initUser()
  }
}
</script>

<style lang="scss" scoped>
$bgColor: #eee;
ul {
  list-style: none;
  display: flex;
  width: 1200px;
  margin: 0 auto;
  li {
    background: $bgColor;
    color: #333;
    flex: 1;
    padding: 20px 0;
    border-bottom: 1px solid #fff;
  }
}
</style>
