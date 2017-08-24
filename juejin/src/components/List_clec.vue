<template>
  <ul class="collection-list">
    <li v-for="(c,n) of cData" class="co-item">
      <div class="one-collection">
        <a href="#">
          <img class="thumb" :src="c.backg">
          <div class="mask"></div>
          <div class="content">
            <h5 class="title">{{c.name}}</h5>
            <ul class="meta-list">
              <li class="meta">{{c.author}}</li>
              <li class="meta">{{c.num}} 篇文章</li>
              <li class="meta">{{c.person}} 人关注</li>
            </ul>
            <button v-if="str=='allColle'" @click.prevent="addColle(c,$event)" class="follow-btn">
              <span>关注</span>
            </button>
            <button v-if="str=='myColle'" @click.prevent="delColle(c,$event)" class="follow-btn">
              <span>已关注</span>
            </button>
          </div>
        </a>
      </div>
    </li>
    <li v-if="cData.length===0" class="empty text-muted">无收藏集</li>
  </ul>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      //
    }
  },
  methods: {
    addColle(obj,ev) {
      let _this=ev.currentTarget;
      $(_this).children('span').text('已关注');
      this.$store.dispatch('addFollow',obj);
    },
    delColle(obj, ev) {
      let _this=ev.currentTarget;
      $(_this).children('span').text('关注');
      this.$store.dispatch('delFollow',obj);
    }
  },
  props: {
    cData: Array,
    str: String
  }
}
</script>

<style scoped>
  .collection-list{
    padding: 2.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .co-item{
    margin: 0 0 1.4rem;
    width: 100%;
    height: 13.3rem;
    box-sizing: border-box;
  }
  .one-collection{
    position: relative;
    height: 100%;
  }
  .thumb{
    width: 100%;
    height: 100%;
  }
  .one-collection .mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all .2s;
    background-color: hsla(0,0%,43%,0);
    background-image: linear-gradient(hsla(0,0%,56%,.3),rgba(70,70,70,.6));
  }
  .one-collection .content{
    position: absolute;
    top: 1.1rem;
    left: 1.1rem;
    right: 1.1rem;
    bottom: 1.1rem;
    overflow: hidden;
    z-index: 1;
  }
  .one-collection .content .title{
    position: absolute;
    left: 0;
    right: 4rem;
    bottom: 3rem;
    font-size: 18px;
    font-weight: 500;
    line-height: 1.4;
    color: #fff;
    cursor: pointer;
  }
  .one-collection .content .meta-list{
    position: absolute;
    left: 0;
    right: 5em;
    bottom: 0;
    height: 28px;
    font-size: 12px;
    line-height: 28px;
    color: #fff;
    white-space: nowrap;
    overflow: hidden;
  }
  .content .meta-list .meta{
    display: inline-block;
    max-width: 7rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .content .meta-list .meta:first-child{
    max-width: 6rem;
  }
  .content .meta-list .meta:not(:first-child):before {
    content: "\B7";
    margin: 0 .4rem;
  }
  .one-collection .content .follow-btn{
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4.8rem;
    height: 25px;
    font-size: 12px;
    line-height: 1;
    color: #fff;
    background: transparent;
    border: 1px solid #fff;
    border-radius: 2px;
    padding: 0;
  }
  .collection-list .empty{
    width: 100%;
    font-size: 1.2rem;
    text-align: center;
  }
  .collection-list  .text-muted{
    color: #666;
  }
</style>
