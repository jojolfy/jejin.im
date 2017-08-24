<template>
  <div class="column-list">{{handleIs}}
    <Vlisthead :num="isNomal"></Vlisthead>{{handlearticlesData}}
    <Vlistnomal v-if="isNomal===1" :articleData="articlesData"></Vlistnomal>
    <Vlistclec  v-if="isNomal===2" :cData="handleCollections" :str="'allColle'"></Vlistclec>
    <Vlistexplore  v-if="isNomal===3" :articleData="articlesData"></Vlistexplore>
  </div>
</template>

<script>
import $ from 'jquery';
import Vlistnomal from './List_nomal.vue';
import Vlistclec from './List_clec.vue';
import Vlisthead from './List_head.vue';
import Vlistexplore from './List_explore.vue';
import axios from 'axios'
import qs from 'qs'
export default {
  name: 'all',
  data() {
    return {
      scTop: 0,
      isNomal: 1,
      articlesData: [],
      craft: true
    }
  },
  methods: {
    scrolTop() {
      let scrolled = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
      if (scrolled > 200) {
        $('#app>header').css('top',-100);
        $('.container .view-nav').css('top',0);
      }else{
        $('#app>header').css('top',0);
        $('.container .view-nav').css('top','5.1rem');
      }

      if(this.craft){
        if ( (scrolled + window.innerHeight) > (document.body.offsetHeight-10)) {
          if(this.$route.matched[0].path=='/collections'){
            this.craft = false;
            console.log('无限加载');
            axios.post('http://127.0.0.1:3210/follow',)
            .then((res) => {
              this.$store.dispatch('moreData',res.data);
              this.craft = true;
            }).catch(function(err) {
              console.log(err);
            });
          }
        }
      }
    }
  },
  mounted() {
    this.$nextTick(function () {
      window.addEventListener('scroll', this.scrolTop);
    });
  },
  components: {
    Vlistnomal,
    Vlisthead,
    Vlistclec,
    Vlistexplore
  },
  computed: {
    handleIs() {
      let str=this.$route.matched[0].path;
      switch (str) {
        case '/zhuanlan':
          this.isNomal = 1;
          break;
        case '/collections':
          this.isNomal = 2;
          break;
        case '/explore':
          this.isNomal = 3;
          break;
        case '/timeline':
          this.isNomal = 3;
          break;
      }
    },
    handleCollections() {
      return this.$store.state.collData;
    },
    handlearticlesData() {
      let curRou=this.$route.path;
      let str=curRou.substring(curRou.lastIndexOf('/'));
      switch (str) {
        case '/android':
          this.articlesData = this.$store.state.androidData;
          break;
        case '/frontend':
          this.articlesData = this.$store.state.frontendData;
          break;
        default:
          this.articlesData = this.$store.state.allData;
          break;
      }
    }
  }
}
</script>

<style scoped>
  .column-list{
    width: 100%;
    background-color: #fff;
  }
</style>
