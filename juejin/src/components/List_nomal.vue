<template>
  <ul class="entry-list">
    <li v-for="(el, it) of articleData" class="li-item" :key="it">
      <div class="column-entry">
        <div class="row user-info-row center-box">
          <div class="row center-box">
            <a href="#" class="row center-box">
              <div class="avatar">
                <img :src="el.avatar">
              </div>
              <span class="username">{{el.name}}</span>
            </a>
          </div>
          <span class="date">{{showTime(el.time)}}</span>
        </div>
        <div class="row abstract-row">
          <a :href="el.address" target="_blank" class="title">{{el.title}}</a>
          <a :href="el.address" target="_blank" class="abstract">{{el.content}}</a>
        </div>
        <div class="row action-row center-box">
          <ul class="row center-box action-list">
            <li @click="addLike" class="row center-box action-list like">
              <div class="icon ion-android-favorite"></div>
              <span class="count">{{el.likeNum}}</span>
            </li>
            <li class="row center-box action-list like">
              <div class="icon ion-android-textsms"></div>
              <span class="count">{{el.comment}}</span>
            </li>
          </ul>
          <div class="row center-box">
            <a href="javascript:;" class="read-all" @click="readAll">阅读全文</a>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import $ from 'jquery';
import time from '../js/handelTime';

export default {
  data() {
    return {
      //
    }
  },
  methods: {
    readAll(ev) {
      let _this=ev.currentTarget,
          obj=$(_this).parent().parent().siblings('.abstract-row').children('.abstract');
      if(obj.hasClass('readmore')){
        obj.removeClass('readmore');
        $(_this).text('阅读全文');
      }else{
        obj.addClass('readmore');
        $(_this).text('收起');
      }
    },
    addLike(ev) {
      let _this=ev.currentTarget;
      let n=$(_this).children('span').text();
      if($(_this).hasClass('added')){
        $(_this).removeClass('added');
        $(_this).children('span').text(Number(n)-1);
      }else{
        $(_this).addClass('added');
        $(_this).children('span').text(Number(n)+1);
      }
    }
  },
  computed: {
    showTime(){
      return time;
    }
  },
  props: {
    articleData: Array
  }
}
</script>

<style scoped>
  .li-item{
    padding: 2.5rem;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
  }
  .row{
    display: -webkit-box;
    display: -ms-flexbox; 
    display: flex;
  }
  .center-box{
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }
  .user-info-row{
    font-size: 1.16rem;
    padding: .3rem 0 1.3rem;
    color: #8b8b8b;
  }
  .abstract-row{
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  .action-row{
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    margin-top: 1.5rem;
    color: rgba(24,37,50,.3);
  }
  .user-info{
    cursor: pointer;
  }
  .avatar{
    display: inline-block;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-right: 1rem;
    overflow: hidden;
  }
  .avatar img{
    width: 100%;
    height: 100%;
  }
  .username:after{
    content: "\B7";
    margin: 0 .5rem;
    display: inline-block;
  }
  .title{
    width: 100%;
    margin-bottom: .8rem;
    font-size: 2rem;
    color: #000;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: .04rem;
  }
  .title:visited{
    color: #909090;
  }
  .abstract{
    width: 100%;
    max-height: 7.800000000000001rem;
    line-height: 1.5;
    letter-spacing: .02rem;
    color: #8b8b8b;
    cursor: pointer;
    overflow: hidden;
    font-size: 1.3rem;
    transition: .3s all ease;
  }
  .abstract.readmore{
    max-height: 999px;
  }
  .action-list{
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
  }
  .like{
    cursor: pointer;
    padding: 0 1rem;
    height: 25px;
    line-height: 25px;
    border: 1px solid #f1f1f1;
    border-radius: 1px;
    background-color: #fff;
    transition: color,border-color,background-color .3s;
  }
  .like:last-child{
    margin-left: -1px;
  }
  .added{
    background-color: #76b433;
    color: #fff;
  }
  .icon{
    font-size: 1rem;
  }
  .count{
    margin-left: .3rem;
    font-weight: 700;
  }
  .read-all{
    margin-left: 2rem;
    position: relative;
  }
</style>
