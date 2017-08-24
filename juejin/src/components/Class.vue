<template>
  <nav class="view-nav">
    <ul class="nav-list">
      <li v-for="(ele,index) of arr"
        class="nav-item"
        :key="index">
        <router-link :to="matchPath+ele.url">{{ele.tx}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      //
    }
  },
  computed: {
    matchPath() {
      return this.$route.matched[0].path;
    }
  },
  props:{
    arr: Array
  },
  methods: {
    //
  }
}
</script>

<style scoped>
  .view-nav{
    position: fixed;
    left: 0;
    top: 5.1rem;
    width: 100%;
    height: 3.833rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
    transition: all .2s;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    z-index: 3;
  }
  .nav-list{
    width: auto;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    overflow-x: scroll;
    margin: auto;
    line-height: 1;
  }
  .nav-list .nav-item {
    -ms-flex-negative: 0;
    flex-shrink: 0;
    font-size: 1.16rem;
    color: #71777c;
    padding: 0 1rem;
    height: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
  }
  .nav-list .nav-item:first-child{
    padding: 0 1.5rem;
  }
  .nav-list .nav-item .router-link-active{
    color: #007fff;
  } 
  .app2{
    margin-top: 50px;
  }

</style>
