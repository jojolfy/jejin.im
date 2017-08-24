<template>
  <div class="sections">
   <Vauth></Vauth>
   <section class="follow-section">
     <header>关注我们</header>
     <ul class="account-list">
       <li>
         <a href="#">
           <img class="icon" src="//gold-cdn.xitu.io/v3/static/img/weibo.0cd39f5.png">
         </a>
       </li>
       <li>
         <a href="#">
           <img class="icon" src="//gold-cdn.xitu.io/v3/static/img/wechat.ce329e6.png">
         </a>
       </li>
       <li>
         <a href="#">
           <img class="icon" src="//gold-cdn.xitu.io/v3/static/img/zhuanlan.18265c6.png">
         </a>
       </li>
       <li>
         <a href="#">
           <img class="icon" src="//gold-cdn.xitu.io/v3/static/img/jianshu.80c1fdd.png">
         </a>
       </li>
     </ul>
   </section>
   <section class="follow-section copyright">
     <ul class="more-list">
       <li>
         <router-link to="/about" target="_blank">关于</router-link>
       </li>
       <li>
         <a href="#" target="_blank">招牌</a>
       </li>
       <li>
         <a href="#" target="_blank">商务合作</a>
       </li>
     </ul>
     <ul class="more-list">
       <li>
         <a href="#" target="_blank">发现更多</a>
       </li>
       <li>
         <span>©2017 掘金</span>
       </li>
     </ul>
   </section>
  </div>
</template>

<script>
import Vauth from './Auth.vue';
export default {
  name: 'hello',
  data () {
    return {

    }
  },
  components: {
    Vauth
  }
}
</script>

<style>
  .sections{
    width: 90%;
    margin: auto;
  }
  section{
    background-color: #fff;
    border-radius: 2px;
    margin: 1.767rem 0 1.5rem;
    overflow: hidden;
  }
  .shadow{
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }
  .auth-section {
    padding: 1.3rem;
  }
  .auth-head{
    font-size: 1.2rem;
    color: #333;
    line-height: 1.6rem;
    margin-bottom: 1.3rem;
    font-weight: 700;
  }
  .auth-list{
    width: 70%;
    margin: auto;
  }
  .auth-btn{
    width: 100%;
    margin-bottom: .5rem;
    padding: .8rem 0 .8rem 2.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border-radius: 3px;
    font-size: 1.1rem;
    box-shadow: inset 0 -0.2rem 0 0 rgba(0,0,0,.05);
    color: #fff;
    cursor: pointer;
  }
  .auth-btn.weibo{
    background-color: #d21a1a;
  }
  .auth-btn.wechat{
    background-color: #37c700;
  }
  .auth-btn.github{
    background-color: #4c4c4c;
  }
  .auth-btn.register{
    display: block;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    color: #007fff;
    background-color: #fff;
    border: 1px solid #eaeaea;
  }
  .auth-btn .icon{
    margin-right: .7rem;
  }

  .user-company-box{
    text-align: center;
    color: #909090;
    margin-top: 2rem;
  }
  .user-company{
    width: 170px;
    margin-top: .6rem;
  }

  .follow-section{
    background-color: transparent;
    text-align: center;
    color: #909090;
    box-shadow: none;
    overflow: visible;
  }
  .follow-section .account-list{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 1rem 0;
  }
  .account-list .icon{
    width: 24px;
    margin-left: .5rem;
    margin-right: .5rem;
    cursor: pointer;
  }

  .follow-section.copyright{
    font-size: 1.1rem;
  }
  .more-list{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: .4rem;
  }
  .more-list li:not(:last-child):after{
    content: "\B7";
    margin: 0 .4rem;
  }
</style>
