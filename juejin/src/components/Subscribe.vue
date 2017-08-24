<template>
	<div class="sub-view">
		<Vclass :arr="subdao"></Vclass>
		<router-view></router-view>
	</div>
</template>

<script>
import Vclass from './Class.vue';
export default {
  name: 'subscribe',
  data() {
    return {
      subdao: [
        {url: '/subscribed', tx: '已关注标签'},
        {url: '/all', tx: '全部标签'}
      ]
    }
  },
  components: {
  	Vclass
  }
}
</script>

<style scoped>
.sub-view{
	padding-top: 5.6rem;
	background-color: #fff;
}
</style>
