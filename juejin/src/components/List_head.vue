<template>
  <header class="list-header">
    <span v-show="num===1" class="list-title">原创文章</span>
    <nav class="list-nav">
      <ul class="nav-list">
        <li class="nav-item" :class="{'item-pa': num!=1}" @click.stop="searchOne">
          <a href="#">热门</a>
        </li>
        <li class="nav-item on" :class="{'item-pa': num!=1}"  @click.stop="searchOne">
          <a href="#">最新</a>
        </li>
        <li v-show="num!==2" class="nav-item" :class="{'item-pa': num!=1}"  @click.stop="searchOne">
          <a href="#">评论</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import $ from 'jquery';
export default {
  data(){
    return {
      //
    }
  },
  props: {
    num: Number
  },
  methods: {
    searchOne(ev) {
      let _this=ev.currentTarget;
      $(_this).addClass('on').siblings().removeClass('on');
    }
  }
}
</script>

<style scoped>
  .list-header{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 1.3rem 2rem;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
  }
  .list-title{
    font-size: 1.3rem;
    color: #000;
  }
  .list-nav{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
  .nav-list{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    line-height: 1;
  }
  .nav-item{
    /*position: relative;*/
    padding: 0 .8rem;
    font-size: 1.16rem;
    border-left: 1px solid hsla(0,0%,59%,.2);
    cursor: pointer;
  }
  .item-pa{
    padding: 0 1.2rem;
  }
  .nav-item:first-child{
    border: none;
  }
  .nav-item:last-child{
    padding-right: 0;
  }
  .nav-item.on a{
    color: #007fff;
  }
</style>
