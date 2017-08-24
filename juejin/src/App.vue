<template>
  <div id="app">{{handelOK}}
    <Vmodal v-if="ok"></Vmodal>
    <Vhead></Vhead>
    <main>{{getArticles}}
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import './css/reset.css';
import './css/ionicons.min.css';

import axios from 'axios'
import qs from 'qs'

import Vhead from './components/Head.vue';
import Vmodal from './components/Modal.vue';

export default {
  name: 'app',
  data() {
    return {
      ok: false,
      loadMore: false
    }
  },
  components: {
    Vmodal,
    Vhead
  },
  computed:{
    handelOK(){
      this.ok = this.$store.state.modal;
    },
    handelCount() {
      if(this.$store.state.isLogin){
        this.ok = false;
      }
    },
    getArticles() {
      let _this=this;
      function articles() {
        return axios.post('http://127.0.0.1:3210/user/getArticles');
      }
      function collect() {
        return axios.post('http://127.0.0.1:3210/follow');
      }
      axios.all([articles(), collect()])
        .then(axios.spread(function(art, col) {
          _this.$store.dispatch('allArticle',art.data);
          _this.$store.dispatch('allCollections',col.data);
        })).catch(function(err) {
          console.log(err);
        });
      if(localStorage.user&&localStorage.paw){
        let obj = {count: localStorage.user, paw: localStorage.paw};
        this.$store.dispatch('loginData',obj);
      }
    }
  },
  methods: {
    scrollLoad() {
      console.log(this);
    }
  }
}
</script>

<style>
#app{
  padding-top: 5rem;
}
main{
  width: 100%;
  max-width: 960px;
  
}
.container{
  margin-bottom: 3rem;
}
</style>
