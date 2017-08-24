<template>
  <div class="user-view">
    <div class="user-info-box">
      <div class="avatar">
        <img :src="handlePersonMess.avatar">
      </div>
      <div class="username">{{handlePersonMess.name}}</div>
      <button class="setting-btn">设置</button>
    </div>
    <div class="user-profile-list">
      <div>
        <header class="list-header">
          <div @click="handleType" class="type-selector">
            <div class="current">
              收藏集 {{handlePerson.length}} 个
              <div class="icon ion-arrow-down-b" :class="{'open':typeSelector}"></div>
            </div>
            <ul v-show="typeSelector" class="type-list">
              <li class="item">
                <span class="tittle">喜欢</span>
                <span class="count">0 篇</span>
              </li>
              <li class="item">
                <span class="tittle">收藏集</span>
                <span class="count">{{handlePerson.length}} 个</span>
              </li>
              <li class="item">
                <span class="tittle">关注标签</span>
                <span class="count">0 个</span>
              </li>
            </ul>
          </div>
          <ul class="sort-list">
            <li @click="handleCreate" class="item" :class="{'active': isCreate}">创建的 (0)</li>
            <li @click="handleCreate" class="item" :class="{'active': !isCreate}">关注的 ({{handlePerson.length}})</li>
          </ul>
        </header>
        <Vlistclec :cData="isCreate?createData:handlePerson" :str="'myColle'"></Vlistclec>
      </div>
    </div>
  </div>
</template>

<script>
import Vlistclec from './List_clec.vue';

export default {
  name: 'user',
  data() {
    return {
      typeSelector: false,
      isCreate: true,
      createData: []
    }
  },
  methods: {
    handleType() {
      this.typeSelector = !this.typeSelector;
    },
    handleCreate() {
      this.isCreate = !this.isCreate;
    }
  },
  components: {
    Vlistclec
  },
  computed: {
    handlePerson() {
      return this.$store.state.personCollData;
    },
    handlePersonMess() {
      return this.$store.state.userData;
    }
  }
}
</script>

<style scoped>
  .user-info-box{
    padding: 4rem 0 1.8rem;
    text-align: center;
  }
  .user-info-box .avatar{
    display: inline-block;
    margin: 1.5rem 0;
    width: 86px;
    height: 86px;
    border-radius: 50%;
    overflow: hidden;
  }
  .user-info-box .avatar img{
    width: 100%;
    height: 100%;
  }
  .username{
    padding: 0 2.4rem;
    font-size: 2.5rem;
    font-weight: 400;
    line-height: 1;
    -webkit-user-select: text;
    -moz-user-select: text;
    -ms-user-select: text;
    user-select: text;
  }
  .setting-btn{
    outline: none;
    transition: background-color .3s,color .3s;
    cursor: pointer;
    border-radius: 2px;
    -webkit-appearance: none;
    margin-top: 1.5rem;
    padding: .7rem 3rem;
    color: #000;
    border: 1px solid #000;
    background-color: transparent;
    font-size: 1.1rem;
  }
  .user-profile-list{
    position: relative;
    margin: 3rem auto 4.17rem;
    width: 70rem;
    max-width: 100%;
    background-color: #fff;
    border-radius: 2px;
    cursor: default;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  }
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
    padding: .3rem;
    background-color: #fff;
    position: relative;
    border-bottom: 1px solid hsla(0,0%,59%,.1);
  }
  .type-selector{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    padding: 0 1.3rem;
    height: 50px;
    cursor: pointer;
    font-size: 1.2rem;
    position: relative;
  }
  .type-selector .current{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    font-weight: 600;
    color: #2b445d;
  }
  .type-selector .icon{
    margin-left: 1rem;
    opacity: .5;
  }
  .type-selector .open{
    -webkit-transform: rotate(180deg);
    transform: rotate(180deg);
  }
  .type-list{
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 1px;
    padding: 1rem 0;
    min-width: 14rem;
    border-radius: 3px;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
    border: 1px solid hsla(217,5%,71%,.45);
    z-index: 10
  }
  .type-list .item{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding: .6rem 1.5rem;
    white-space: nowrap;
    color: rgba(43,68,93,.7);
    transition: all .3s;
  }
  .type-list .item .count{
    margin-left: 2.5rem;
  }
  .sort-list{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
    -webkit-box-flex: 1;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
  }
  .sort-list .item{
    position: relative;
    padding: 1.3rem;
    font-size: 1.1rem;
    cursor: pointer;
    color: #2b445d;
    opacity: .4;
    transition: all .3s;
  }
  .sort-list .item.active{
    color: #2b445d;
    opacity: 1;
    font-weight: 700;
  }
</style>
