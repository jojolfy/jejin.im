<template>
  <div>
    <div class="col-view">{{handleLabel}}
      <Vclass :arr="label"></Vclass>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import Vclass from './Class.vue';
export default {
  name: 'nomal',
  data() {
    return {
      label: []
    }
  },
  components: {
  	Vclass
  },
  computed: {
    handleLabel() {
      switch (this.$route.matched[0].path) {
        case '/timeline':
          this.label = this.$store.state.attentionTag;
          break;
        case '/collections':
          this.label = this.$store.state.collectionTag;
          break;
        default:
          this.label = this.$store.state.tag;
          break;
      }
    }
  }
}
</script>

<style scoped>
	.col-view{
		margin-top: 5.6rem;
	}
</style>
