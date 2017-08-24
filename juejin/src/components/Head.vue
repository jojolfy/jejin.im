<template>
  <header>
    <div class="topbar">
      <router-link to="/" class="logo">
        <img src="//gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg" alt="掘金" class="logo-img">
      </router-link>
      <Vnav></Vnav>
    </div>
  </header>
</template>

<script>
import Vnav from './Nav.vue';
export default {
  name: 'head',
  data() {
    return {
      //
    }
  },
  components: {
    Vnav
  }
}
</script>

<style scoped>
header{
  background: #fff;
  border-bottom: 1px solid #f1f1f1;
  color: #909090;
  height: 5rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  transition: all .2s;
  z-index: 10;
}
.topbar{
  height: 100%;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  width: 96%;
  max-width: 960px;
  margin: auto;
}
</style>
