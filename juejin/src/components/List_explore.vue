<template>
  <ul class="explore-list">
    <li v-for="(elem,ite) of articleData" class="ex-item">
      <!-- <a href="#"> -->
        <div class="content-box">
          <div class="info-box">
            <div class="meta-row">
              <ul class="meta-list">
                <li class="recommended">荐</li>
                <li>
                  <a href="#">{{elem.name}}</a>
                </li>
                <li>{{showTime(elem.time)}}</li>
                <li>
                  <a href="#">{{elem.type}}</a>
                  <!-- <a href="#">招牌 /</a>
                  <a href="#">程序员</a> -->
                </li>
              </ul>
            </div>
            <h5 class="title-row">
              <a class="title" :href="elem.address">{{elem.title}}</a>
            </h5>
            <div class="action-row">
              <ul class="action-list">
                <li class="element">
                  <a href="javascript:;" class="ele-box">
                    <img class="icon" src="//gold-cdn.xitu.io/v3/static/img/like.4bf00fb.svg">
                    <span class="count">{{elem.likeNum}}</span>
                  </a>
                </li>
                <li class="element">
                  <a href="javascript:;" class="ele-box">
                    <img class="icon" src="//gold-cdn.xitu.io/v3/static/img/comment.4d5744f.svg">
                    <span class="count">{{elem.comment}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      <!-- </a> -->
    </li>
  </ul>
</template>

<script>
import $ from 'jquery';
import time from '../js/handelTime';

export default {
  data() {
    return {
      ifAdd: true
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
a{ color: inherit; }
  .explore-list{
    width: 100%;
    background-color: #fff;
  }
  .ex-list{
    border-bottom: 1px solid rgba(178,186,194,.15);
  }
  .content-box{
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 1.5rem 2rem;
  }
  .content-box .info-box{
    display: flex;
    -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    min-width: 0;
  }
  .content-box .info-box .meta-row{
    font-size: 1rem;
    color: #b2bac2;
  }
  .content-box .meta-row .meta-list{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
    white-space: nowrap;
  }
  .recommended{
    font-weight: 500;
    color: #f70;
  }
  .meta-row .meta-list li:not(:last-child):after{
    content: "\B7";
    margin: 0 .4em;
    color: #b2bac2;
  }
  .content-box .info-box .title-row{
    margin: .5rem 0 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content-box .title-row .title{
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
  }
  .content-box .title-row .title:visited{
    color: #909090;
  }
  .content-box .action-row .action-list{
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    white-space: nowrap;
  }
  .element{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    position: relative;
    height: 1.5rem;
    font-size: 1rem;
    line-height: 1;
    color: #b2bac2;
    border-radius: 1px;
    border: 1px solid #edeeef;
  }
  .element:last-child{
    margin-left: -1px;
  }
  .ele-box{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 .8rem;
    height: 100%;
  }
  .ele-box .count{
    margin-left: .2em;
    font-weight: 700;
  }
</style>
