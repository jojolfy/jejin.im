<template>
    <nav class="main-nav">
      <div style="display:none">{{route}}</div>
      <div class="nav-list">
        <div class="list-menu">
          <div class="show-menu" @click="dropDown">
            <span class="cont">{{text}}</span>
            <p class="icon ion-arrow-down-b"></p>
          </div>
          <div class="hide-menu" :class="{'show':isShow}">
            <li class="nav-item" 
              v-for="(e,i) of handleRoute"
              :key="i"
              @click="dropDown">
              <router-link :to="e.url"
                :class="{'active':isOn==i}">
                {{e.title}}</router-link>
            </li>
          </div>
        </div>
        <div v-if="!handelStatu" class="show-menu auth">
          <span class="login"
            @click='modalBox(loginBtn)' >登录</span>
          <span class="register"
            @click='modalBox(regBtn)' >注册</span>
        </div>
        <ul v-if="handelStatu" class="count-box">
          <li class="message nomal">
            <i class="icon ion-android-notifications"></i>
          </li>
          <li class="nomal">
            <div @click="userDrop" class="avatar">
              <img :src="handleUserData.avatar">
            </div>
            <ul v-show="isDropmenu" class="ava-menu">
              <div class="user-dropdown-list">
                <li class="user-dropdown-item">
                  <a href="#">
                    <i class="ion-person"></i>我的主页
                  </a>
                </li>
                <li class="user-dropdown-item">
                  <a href="#">
                    <i class="ion-android-favorite"></i>我喜欢的
                  </a>
                </li>
                <li @click="userDrop" class="user-dropdown-item">
                  <router-link to="/user/collect">
                    <i class="ion-compose"></i>我的收藏集
                  </router-link>
                </li>
                <li class="user-dropdown-item">
                  <a href="#">
                    <i class="ion-pricetag"></i>标签管理
                  </a>
                </li>
              </div>
              <div class="user-dropdown-list">
                <li class="user-dropdown-item">
                  <a href="#">
                    <i class="ion-ios-gear"></i>设置
                  </a>
                </li>
                <li class="user-dropdown-item">
                  <a href="#">
                    <i class="ion-ios-information"></i>关于
                    <i class="more ion-chevron-right more-icon"></i>
                  </a>
                </li>
              </div>
              <div class="user-dropdown-list">
                <li class="user-dropdown-item">
                  <a @click="logout" href="javascript:;">
                    <i class="ion-android-exit"></i>登出
                  </a>
                </li>
              </div>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'nav',
  data () {
    return {
     isOn: 0,
     isShow: false,
     text: '首页',
     loginBtn: 'logi',
     regBtn: 'reg',
     isDropmenu: false
    }
  },
  methods: {
    dropDown(){
      this.isShow=!this.isShow;
    },
    modalBox(str){
      this.$store.dispatch('openModal',str);
    },
    userDrop() {
      this.isDropmenu=!this.isDropmenu;
    },
    logout() {
      this.$store.dispatch('logoutCount');
      this.isDropmenu=!this.isDropmenu;
    }
  },
  computed: {
    route() {
      switch (this.$route.name) {
        case 'Zhuanlan':
          this.isOn=1;
          this.text='专栏';
          break;
        case 'Collections':
          this.isOn=2;
          this.text='收藏集';
          break;
        case 'Explore':
          this.isOn=3;
          this.text='发现';
          break;
        case 'Subscribe':
          this.isOn=4;
          this.text='标签';
          break;
        default:
          this.isOn=0;
          this.text='首页';
          break;
      }
    },
    handelStatu() {
      return this.$store.state.isLogin;
    },
    handleUserData() {
      return this.$store.state.userData;
    },
    handleRoute() {
      return this.$store.state.rout;
    }
  }
}
</script>

<style scoped>
.main-nav{
  height: 100%;
  -webkit-box-flex: 1;
  -ms-flex: 1 0 auto;
  flex: 1 0 auto;
}

.nav-list{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  position: relative;
}
.list-menu{
  position: absolute;
  left: 0;
  top: 0;
  background: #fff;
}
.show-menu{
  height: 5rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #007fff;
  font-size: 1.3rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  padding: 0 2rem;
}
.show-menu .cont{
  margin-right: .5rem;
}
.hide-menu{
  display: none;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  border: 1px solid hsla(217,5%,71%,.45);
  border-radius: 4px;
  font-size: 1.2rem;
  z-index: 100;
}
.show{ display: block; }

.nav-item{
  padding: 0 1.5rem;
  font-size: 1.33rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  height: 4rem;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.nav-item a{
  color: #71777c;
}
.nav-item .active{
  color: #007fff;
}

.auth{
  padding-right: 0;
}
.auth .login:after{
  content: "\B7";
  margin: 0 .4rem;
}

.count-box{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}
.count-box .nomal{
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  height: 100%;
  color: #71777c;
  padding: 0 1.5rem;
  font-size: 1.33rem;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
.count-box .nomal:last-child{
  padding-right: 0;
}
.count-box .icon{
  font-size: 2rem;
  color: #71777c;
}
.count-box .avatar{
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  overflow: hidden;
}
.count-box .avatar img{
  width: 100%;
  height: 100%;
}
.ava-menu{
  position: absolute;
  width: 13rem;
  right: 0;
  top: 100%;
  -webkit-transform: translateX(0);
  transform: translateX(0);
  margin: 0;
  padding: 0;
  list-style: none;
  background-color: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
  border: 1px solid hsla(217,5%,71%,.45);
  border-radius: 4px;
  font-size: 1.2rem;
}
.user-dropdown-list{
  padding: 1rem 0;
  border-bottom: 1px solid rgba(0,0,0,.04);
}
.user-dropdown-item{
  font-size: 1.3rem;
  cursor: pointer;
}
.user-dropdown-item>a{
  display: block;
  color: #71777c;
  padding: .5rem 1rem;
}
.user-dropdown-item>a>i{
  color: #b2bac2;
  margin-right: .8rem;
  font-size: 1.7rem;
}
.user-dropdown-item>a>.more{
  float: right;
  font-size: 1.2rem;
  line-height: 2rem;
}
</style>
